const gql = require("graphql-tag");

const typeDefs = gql`
    type Query{
        getRooms: [String],
        getRoom(room: ID!): String!, 
        getRoomUsers(room: ID!): [String],
    },
    type Mutation{
        createRoom(data: String!): String!,
    }
`

module.exports = typeDefs;