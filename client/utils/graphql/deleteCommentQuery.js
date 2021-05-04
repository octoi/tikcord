import gql from 'graphql-tag';

const deleteCommentQuery = gql`
    mutation deleteComment($comment: ID!){
        deleteComment(comment: $comment)
    }
`

export default deleteCommentQuery;