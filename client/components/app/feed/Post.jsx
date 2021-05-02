import styles from '../../../styles/Post.module.css';
import useAuthContext from '../../../context/contextHook';
import { Image, Avatar, Text, Button } from '@chakra-ui/react';

export default function Post({ post }) {
    const { user } = useAuthContext();

    return (
        <div className={styles.container}>
            <div className={styles.topper}>
                <div className={styles.profile}>
                    <Avatar width={70} height={70} src={post.creator.profile} name={post.creator.name} />
                    <div style={{ marginLeft: "10px" }}>
                        <Text fontSize="xl">{post.creator.name}</Text>
                        <Text style={{ color: "#CBD5E0" }} fontSize="lg">{post.creator.email}</Text>
                    </div>
                </div>
                {user?.email == post.creator.email ? (
                    <Button variant="outline" colorScheme="twitter">DELETE</Button>
                ) : (
                    <Button variant="outline" colorScheme="twitter">VIEW</Button>
                )}
            </div>

            <Image className={styles.image} src={post.content} alt={post.description} />
            <p>{post.description}</p>
        </div>
    );
}