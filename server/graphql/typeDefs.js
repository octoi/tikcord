const gql = require("graphql-tag");

const typeDefs = gql`
    type Room {
        id: ID!,
        roomid: String!,
        roomdata: String!,
    },
    type Query{
        getRooms: [Room!],
        getRoom(room: ID!): String!, 
        getRoomUsers(room: ID!): [String],
    },
    type Mutation{
        createRoom(data: String!): String!,
    }
`

module.exports = typeDefs;