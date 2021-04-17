const gql = require("graphql-tag");

const typeDefs = gql`
    type User{
        name: String!,
        password: String!,
        email: String!,
        profile: String!,
        bio: String!,
    },
    type Video{
        id: ID!,
        creator: ,
    } 
`

module.exports = typeDefs;