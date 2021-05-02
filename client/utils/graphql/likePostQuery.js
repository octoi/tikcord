import gql from 'graphql-tag';

const likePostQuery = gql`
    mutation likePost(
        $post: String!
    ){
        likePost(
            post: $post
        ){
            post
        }
    }
`

export default likePostQuery;