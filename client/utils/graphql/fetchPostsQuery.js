import gql from 'graphql-tag';

const fetchPosts = gql`
    {
        getPosts{
            id
            content
            description
            creator{
                name
                email
                profile
            }
            likeCount
            commentCount
        }
    }
`

export default fetchPosts;