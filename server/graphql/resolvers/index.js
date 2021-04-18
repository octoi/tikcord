const userResolvers = require("./user");
const videoResolvers = require("./video");

module.exports = {
    Video:{
        likeCount: (parent) => parent.likecount,
        commentCount: (parent) => parent.commentcount,
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