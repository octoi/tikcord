require("dotenv").config();

const socketIo = require("socket.io");
const { ApolloServer } = require("apollo-server");

const redis = require("./redis");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({ req }) }); // graphql server

const io = socketIo(server);

io.on("connection", () => {
    console.log("user connected")
})

const port = process.env.PORT || 5000;
server.listen(port).then(({ url }) => console.log(`[INFO] Server started at ${url}`))