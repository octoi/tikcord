import gql from 'graphql-tag';

const createPostQuery = gql`
    mutation createPost(
        $content: String!,
        $description: String!
    ){
        createVideo(
            content: $content
            description: $description
        ){
            id
            content
            description
            likeCount
            commentCount
            creator{
                name
                email
                profile
            }
        }
    }
`;

export default createPostQuery;