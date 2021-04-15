const gql = require("graphql-tag");

const typeDefs = gql`
    type User{
        id: ID!,
        name: String!,
        email: String!,
        profile: String!,
    },
    type Room{
        id: ID!,
        name: String!,
        host: User!,
        description: String!,
    },
    type Query{
        getRooms: [Room],
        getRoomUsers(room: ID!): Room, 
    },
    type Mutation{
        createRoom(name: String!, description: String!, host: User!): Room!,
        joinRoom(user: User!): Room!, 
    }
`

module.exports = typeDefs;