const gql = require("graphql-tag");

const typeDefs = gql`
    type Like{
        id: ID!
        creator: User!,
        post: ID!,
    },
    type Comment{
        id: ID!,
        createdAt: String!,
        creator: User!,
        content: String!,
        post: ID!,
    },
    type Post{
        id: ID!,
        creator: User!,
        user: String!,
        content: String!,
        description: String!,
        createdAt: String!,
        likeCount: Int!,
        commentCount: Int!,
        likes: [Like!],
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
        getPosts: [Post!],
        getUserPosts(email: String!): [Post!],
        getUser(email: String!): User!,
        getPostComments(post: ID!): [Comment!],
        getPostLikers(post: ID!): [Like!],
    },


    type Mutation{
        register(name: String!, email: String!, password: String!, bio: String!, profile: String!): User!,
        login(email: String!, password: String!): User!,
        updateUser(name: String!, bio: String!, profile: String!, email: String!, password: String!): User!,

        createPost(content: String!, description: String!): Post!,
        deletePost(id: ID!): String!,

        likePost(post: ID!): Like!,
        commentPost(post: ID!, content: String!): Comment!,
        deleteComment(comment: ID!): String!,
    }

`

module.exports = typeDefs;