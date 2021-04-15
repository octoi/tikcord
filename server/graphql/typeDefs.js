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
        getRoomUsers(room: ID!): [User!], 
    },
    input Host{
        name: String!,
        email: String!,
        profile: String!,
    }
    type Mutation{
        createRoom(name: String!, description: String!, host: Host!): Room!,
    }
`

module.exports = typeDefs;