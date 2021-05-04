const checkAuth = require("../utils/checkAuth");
const {
    createPost: createAPost,
    getAllPosts,
    getUserPosts: getUserPostsFromDb,
    deletePost: deleteUserPost,
    likeAPost,
    createComment,
    removeComment,
    getPostComments: getPostCommentsFromDb,
    getPostLikes
} = require("../../postgres/helper");
const {
    getPostsFromCache: getPostsFromCache,
    addPostToCache: addPostToCache,
    deleteAPost: deleteAPostFromCache
} = require("../../redis/helper");

const Mutation = {

    createPost: async (_, postData, context) => {
        const user = checkAuth(context);

        postData = {
            ...postData,
            creator: JSON.stringify(user),
            email: user.email,
            createdAt: Date.now(),
            likeCount: 0,
            commentCount: 0,
        }

        const data = await createAPost(postData);
        await addPostToCache({ ...data, creator: user }); // adding data to cache

        return {
            ...data,
            creator: user
        }

    },

    deletePost: async (_, { id }, context) => {
        const user = checkAuth(context);

        await deleteAPostFromCache(id);

        await deleteUserPost(id, user);

        return "deleted";

    },

    likePost: async (_, { post }, context) => {
        const user = checkAuth(context);

        const like = {
            creator: user,
            post
        }

        await likeAPost(like);
        return like;

    },

    commentPost: async (_, data, context) => {
        const user = checkAuth(context);

        const comment = {
            ...data,
            createdAt: Date.now(),
            creator: user,
        }

        await createComment(comment);

        return comment;
    },

    deleteComment: async (_, { comment }, context) => {
        const user = checkAuth(context);

        const deleteComment = await removeComment(user, comment);

        if (deleteComment) {
            return "deleted";
        }
    }

}

const Query = {

    getPosts: async () => {
        let posts = [];

        posts = await getPostsFromCache();

        if (posts.length > 0) return posts;

        const postsRaw = await getAllPosts();

        postsRaw.rows.forEach(async post => {
            posts.push({ ...post, creator: JSON.parse(post.creator) });
            await addPostToCache({ ...post, creator: JSON.parse(post.creator) });
        });

        return posts;
    },

    getUserPosts: async (_, { email }) => {
        const postsRaw = await getUserPostsFromDb(email);
        const posts = [];

        postsRaw.rows.forEach(post => {
            posts.push({ ...post, creator: JSON.parse(post.creator) });
        });

        return posts;
    },

    getPostComments: async (_, { post }) => {
        const commentsFromDb = await getPostCommentsFromDb(post);

        if (!commentsFromDb.rows) return;

        const comments = commentsFromDb.rows

        comments.forEach(comment => {
            comment.createdAt = comment.createdat;
            comment.creator = JSON.parse(comment.creator)
        });

        return comments;

    },

    getPostLikers: async (_, { post }) => {
        const likesFromDb = await getPostLikes(post);

        if (!likesFromDb.rows) return;

        const likes = likesFromDb.rows;

        likes.forEach(like => {
            like.creator = JSON.parse(like.creator);
        });

        return likes;
    },

}

module.exports = { Mutation, Query }