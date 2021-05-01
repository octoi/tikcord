import { useState } from 'react';

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    return (
        <div>
            {posts.length > 0 && posts.map(post => (
                <p>post</p>
            ))}
        </div>
    );
}