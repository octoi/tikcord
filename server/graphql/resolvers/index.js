const userResolvers = require("./user");
const videoResolvers = require("./video");

const { getCommentCount, getLikeCount } = require("../utils/getVideoUtils");

module.exports = {
    Video:{
        likeCount: getLikeCount,
        commentCount: getCommentCount,
    },
    Query: {
        ...userResolvers.Query,
        ...videoResolvers.Query  
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...videoResolvers.Mutation
    }
}