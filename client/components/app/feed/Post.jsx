import styles from '../../../styles/Post.module.css';
import useAuthContext from '../../../context/contextHook';
import useSocketContext from '../../../context/socketContextHook';
import Link from 'next/link';
import Utils from './Utils';
import DELETE_POST_QUERY from '../../../utils/graphql/deletePostQuery';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { Image, Avatar, Text, Button } from '@chakra-ui/react';

export default function Post({ post }) {
    const { user } = useAuthContext();
    const { socket } = useSocketContext();

    const router = useRouter();

    const [DeletePostFromServer] = useMutation(DELETE_POST_QUERY, {
        variables: { id: post.id },
        onError: (err) => {
            console.log(err);
            alert("Oops something went wrong !")
        },
        update: () => {
            router.reload(window.location.pathname);
        }
    })

    const deletePost = () => {
        const permission = confirm("Are you sure ??");
        if (!permission) return;

        DeletePostFromServer();
    }

    return (
        <div className={styles.container}>
            <div className={styles.topper}>
                <div className={styles.profile}>
                    <Link href={`/account/${post.creator.email}`}>
                        <Avatar width={70} height={70} src={post.creator.profile} name={post.creator.name} />
                    </Link>
                    <div style={{ marginLeft: "10px" }}>
                        <Text fontSize="xl">{post.creator.name}</Text>
                        <Text style={{ color: "#CBD5E0" }} fontSize="lg">{post.creator.email}</Text>
                    </div>
                </div>
                <div>
                    {user.email === post.creator.email && (<Button style={{ marginLeft: "10px" }} variant="solid" onClick={deletePost} colorScheme="twitter">DELETE</Button>)}
                </div>
            </div>

            <Image className={styles.image} src={post.content} alt={post.description} />
            <div className={styles.utils}>
                <Text fontSize="xl">{post.description}</Text>
                <Utils post={post} />
            </div>

        </div>
    );
}