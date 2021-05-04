import gql from 'graphql-tag';

const commentPostQuery = gql`
    mutation commentPost(
        $content: String!,
        $post: ID!,
    ){
        commentPost(content: $content, post: $post){
            content
        }
    }
`

export default commentPostQuery;