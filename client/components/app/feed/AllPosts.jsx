import Post from './Post';
import Skeleton from './Skeleton';

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