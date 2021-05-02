import styles from '../../../styles/Post.module.css';
import { Image, Avatar, Text } from '@chakra-ui/react';

export default function Post({ post }) {
    console.log(post);
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <Avatar width={70} height={70} src={post.creator.profile} />
                <div style={{ marginLeft: "10px" }}>
                    <Text fontSize="xl">{post.creator.name}</Text>
                    <Text style={{ color: "#CBD5E0" }} fontSize="lg">{post.creator.email}</Text>
                </div>
            </div>
            <Image className={styles.image} src={post.content} alt={post.description} />
            <p>{post.description}</p>
        </div>
    );
}