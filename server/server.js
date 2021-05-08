require("dotenv").config();

const socket = require("socket.io");
const httpServer = require("http").createServer();
const { ApolloServer } = require("apollo-server");

const redis = require("./redis");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({ req }) }); // graphql server

const io = socket(httpServer);

io.on("connection", () => {
    console.log("user connected")
})

const port = process.env.PORT || 5000;
server.listen(port).then(({ url }) => console.log(`[INFO] Server started at ${url}`))