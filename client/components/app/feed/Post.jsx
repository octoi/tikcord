import styles from '../../../styles/Post.module.css';
import useAuthContext from '../../../context/contextHook';
import Utils from './Utils';
import { Image, Avatar, Text, Button } from '@chakra-ui/react';

export default function Post({ post }) {
    const { user } = useAuthContext();
    const { display_url: postContent } = JSON.parse(post.content);

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
                <div>
                    <Button variant="outline" colorScheme="twitter">VIEW</Button>
                    {user.email === post.creator.email && (<Button style={{ marginLeft: "10px" }} variant="solid" colorScheme="twitter">DELETE</Button>)}
                </div>
            </div>

            <Image className={styles.image} src={postContent} alt={post.description} />
            <div className={styles.utils}>
                <Text fontSize="xl">{post.description}</Text>
                <Utils post={post} />
            </div>

        </div>
    );
}