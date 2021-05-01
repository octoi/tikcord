import gql from 'graphql-tag';

const createPostQuery = gql`
    mutation createVideo(
        $content: String!,
        $description: String!
){
        createVideo(
            content: $content
            description: $description
        ){
            id
            user
            content
            description
            createdAt
            likeCount
            commentCount
        }
    }
`;

export default createPostQuery;