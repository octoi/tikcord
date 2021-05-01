export default function Post({ post }) {
    return (
        <div>
            <img src={post.content} />
            <p>{post.description}</p>
        </div>
    );
}