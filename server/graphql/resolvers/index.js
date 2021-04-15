const userResolver = require("./user");
const roomResolver = require("./room");

module.exports = {
    Query: {
        ...userResolver.Query,
        ...roomResolver.Query,
    },
    Mutation: {
        ...roomResolver.Mutation
    }
}