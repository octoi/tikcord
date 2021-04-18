const gql = require("graphql-tag");

const typeDefs = gql`
    type Like{
        id: ID!
        creator: User!,
    },
    type Comment{
        id: ID!,
        createdAt: String!,
        creator: String!,
        content: String!
    },
    type Video{
        id: ID!,
        creator: User!,
        user: String!,
        content: String!,
        description: String!,
        createdAt: String!,
        likeCount: Int!,
        commentCount: Int!,
    },

    type User{
        id: ID!,
        name: String!,
        password: String!,
        email: String!,
        profile: String!,
        bio: String!,
        token: String!
    },
    
    type Query{
        getVideos: [Video!],
        getUserVideo(user: String!): [Video!],
    },


    type Mutation{
        register(name: String!, email: String!, password: String!, bio: String!, profile: String!): User!,
        login(email: String!, password: String!): User!,
        updateUser(name: String!, bio: String!, profile: String!): User!,

        createVideo(content: String!, description: String!): Video!,
        deleteVideo(id: ID!): String!,

        likeVideo(video: ID!): Like!,
        commentVideo(video: ID!, content: String!): Comment!,
        deleteComment(comment: ID!): String!,
    }

`

module.exports = typeDefs;