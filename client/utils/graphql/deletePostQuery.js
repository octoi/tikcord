import gql from 'graphql-tag';

const deletePostQuery = gql`
    mutation deletePost(
        $id: ID!,
    ){
        deletePost(id: $ID)
    }
`

export default deletePostQuery;