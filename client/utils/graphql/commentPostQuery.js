import gql from 'graphql-tag';

const commentPostQuery = gql`
    mutation commentPost(
        $content: String!,
        $post: ID!,
    ){
        commentPost(content: $content, post: $post){
            id
            creator
            content
        }
    }
`

export default commentPostQuery;