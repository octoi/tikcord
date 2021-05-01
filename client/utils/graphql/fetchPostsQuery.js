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
            }
            likeCount
            commentCount
        }
    }
`

export default fetchPosts;