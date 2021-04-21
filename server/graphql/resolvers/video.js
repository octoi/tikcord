const checkAuth = require("../utils/checkAuth");
const { createVideo, getAllVideos, getUserVideos, deleteVideo: deleteUserVideo, likeAVideo, createComment, removeComment, getVideoComments : getVideoCommentsFromDb, getVideoLikes } = require("../../postgres/helper");

const Mutation = {

    createVideo: async (_, videoData, context) => {
        const user = checkAuth(context);

        videoData = {
            ...videoData,
            creator: JSON.stringify(user),
            email: user.email,
            createdAt: Date.now(),
            likeCount: 0,
            commentCount: 0,
        }

        const data = await createVideo(videoData);
        return {
            ...data,
            creator: user
        }

    },

    deleteVideo: async (_, { id }, context) => {
        const user = checkAuth(context);

        await deleteUserVideo(id, user);
        
        return "deleted";

    },

    likeVideo: async (_, { video }, context) => {
        const user = checkAuth(context);

        const like = {
            creator: user,
            video
        }

        await likeAVideo(like);
        return like;

    },

    commentVideo: async (_, data, context) => {
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

        if(deleteComment){
            return "deleted";
        }
    }

}

const Query = {

    getVideos: async () => {
        const videosRaw = await getAllVideos();
        const videos = [];

        videosRaw.rows.forEach(video => {
            videos.push({ ...video, creator: JSON.parse(video.creator) });
        });

        return videos;
    },

    getUserVideo: async (_, { email }) => {
        const videosRaw = await getUserVideos(email);
        const videos = [];

        videosRaw.rows.forEach(video => {
            videos.push({ ...video, creator: JSON.parse(video.creator) });
        });

        return videos;
    },

    getVideoComments: async (_, { video }) => {
        const commentsFromDb = await getVideoCommentsFromDb(video);
        
        if(!commentsFromDb.rows) return;

        const comments = commentsFromDb.rows

        comments.forEach(comment => {
            comment.createdAt = comment.createdat;
            comment.creator = JSON.parse(comment.creator)
        });

        return comments;
        
    },

    getVideoLikers: async (_, { video }) => {
        const likesFromDb = await getVideoLikes(video);

        if(!likesFromDb.rows) return;

        const likes = likesFromDb.rows;

        likes.forEach(like => {
            like.creator = JSON.parse(like.creator);
        });

        return likes;
    },

}

module.exports = { Mutation, Query }