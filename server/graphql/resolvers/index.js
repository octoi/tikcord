const userResolvers = require("./user");
const postResolvers = require("./post");

const { getCommentCount, getLikeCount } = require("../utils/getPostUtils");

module.exports = {
    Post: {
        likeCount: getLikeCount,
        commentCount: getCommentCount,
        createdAt: (parent) => parent.createdat,
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