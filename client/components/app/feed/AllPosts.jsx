export default function AllPosts({ posts, loading }) {
    return (
        <div>
            {posts && posts.map(post => (
                <p key={post.id}>post</p>
            ))}
        </div>
    );
}