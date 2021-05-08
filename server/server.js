require("dotenv").config();

const connect = require("connect");
const socket = require("socket.io");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = connect();
app.use(cors())

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({ req }) }); // graphql server
server.start();

server.applyMiddleware({ app, path: "/gql" });

const port = process.env.PORT || 5000;
// server.listen(port).then(({ url }) => )

const http = app.listen(port, () => {
    console.log(`[INFO] Server started at http://localhost:8080`);
})

const io = socket(http);
io.on("connection", () => {
    // console.log("user connected")
})