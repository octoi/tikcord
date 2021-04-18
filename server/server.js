require("dotenv").config();

const redis = require("./redis");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({ req }) }); // graphql server

const port = process.env.PORT || 5000;
server.listen(port).then(({ url })=> console.log(`[INFO] Server started at ${url}`))