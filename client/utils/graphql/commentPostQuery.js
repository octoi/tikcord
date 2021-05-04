import gql from 'graphql-tag';

const commentPostQuery = gql`
    mutation commentPost($content: String!){
        commentPost(content: $content){
            content
        }
    }
`

export default commentPostQuery;