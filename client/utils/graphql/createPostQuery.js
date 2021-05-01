import gql from 'graphql-tag';

const createPostQuery = gql`
    mutation createPost(
        $content: String!,
        $description: String!
    ){
        createPost(
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