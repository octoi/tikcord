import gql from 'graphql-tag';

const fetchUserQuery = gql`
    query getUser(
        $email: String!,
    ){
        getUser(email: $email){
            name
            email
            bio
            profile
            id
        },
        getUserPosts(email: $email){
            id
            content
            description
            likeCount
            likes{
                creator
            }
            commentCount
            comments{
                creator
            }
        }
    }
`

export default fetchUserQuery;