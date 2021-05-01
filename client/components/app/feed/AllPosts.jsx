import Post from './Post';

export default function AllPosts({ posts, loading }) {
    return (
        <div>
            {posts && posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}