const userResolvers = require("./user");
const postResolvers = require("./post");

const { getComments, getLikes } = require("../utils/getPostUtils");

module.exports = {
    Post: {
        likeCount: async (parent) => {
            const likes = await getLikes(parent.id);
            return likes.length;
        },
        commentCount: async (parent) => {
            const comments = await getComments(parent.id);
            return comments.length;
        },
        createdAt: (parent) => parent.createdat,
        likes: async (parent) => {
            const likes = await getLikes(parent.id);
            return likes;
        },
        comments: async (parent) => {
            const comments = await getComments(parent.id);
            return comments;
        }
    },
    Query: {
        ...userResolvers.Query,
        ...postResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation
    }
}