import gql from 'graphql-tag';

const fetchPosts = gql`
    {
        getVideos{
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