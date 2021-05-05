import Post from './Post';
import Skeleton from './Skeleton';
import { Spinner } from '@chakra-ui/react';

export default function AllPosts({ posts, loading }) {
    return (
        <div>
            {loading || !loading && (
                <Skeleton />
            )}
            {posts && posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}