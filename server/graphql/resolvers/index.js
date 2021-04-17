const userResolvers = require("./user");
const videoResolvers = require("./video");

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...videoResolvers.Query  
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...videoResolvers.Mutation
    }
}