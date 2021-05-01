import FETCH_POSTS_QUERY from '../../../utils/graphql/fetchPostsQuery';
import { useState } from 'react';
import { useQuery } from '@apollo/client';

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    console.log(data)

    return (
        <div>
            {posts && posts.map(post => (
                <p>post</p>
            ))}
        </div>
    );
}