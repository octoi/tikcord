const userResolvers = require("./user");
const postResolvers = require("./post");

const { getCommentCount, getLikes } = require("../utils/getPostUtils");

module.exports = {
    Post: {
        likeCount: async (parent) => {
            const likes = await getLikes(parent.id);
            return likes.length;
        },
        commentCount: getCommentCount,
        createdAt: (parent) => parent.createdat,
        likes: async (parent) => {
            const likes = await getLikes(parent.id);
            return likes;
        },
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