import Post from './Post';
import Skeleton from './Skeleton';
import { Spinner } from '@chakra-ui/react';

export default function AllPosts({ posts, loading }) {
    return (
        <div>
            {loading && (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )}
            {posts && posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}