import gql from 'graphql-tag';

const likePostQuery = gql`
    mutation likePost(
        $post: ID!
    ){
        likePost(
            post: $post
        ){
            post
        }
    }
`

export default likePostQuery;