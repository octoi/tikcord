import useAuthContext from '../../../context/contextHook';
import useSocketContext from '../../../context/socketContextHook';
import LIKE_POST_QUERY from '../../../utils/graphql/likePostQuery';
import Comment from './Comment';
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Stack, Button, useDisclosure } from '@chakra-ui/react';
import { HeartIcon as OutlinedHeart, AnnotationIcon } from '@heroicons/react/outline';

export default function Utils({ post: postData }) {
    const { user } = useAuthContext();
    const { emitUpdate } = useSocketContext();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [userLiked, setUserLiked] = useState(false);
    const [post, setPost] = useState(postData);


    useEffect(() => {
        post?.likes.forEach(readOnlyLike => {
            const likedUser = JSON.parse(readOnlyLike.creator)
            if (likedUser.email === user.email) {
                setUserLiked(true)
            }
        });
    }, [])

    const [LikePost] = useMutation(LIKE_POST_QUERY, {
        variables: { post: post.id },
        onError(err) {
            console.log(err);
        }
    });

    const like = () => {
        setUserLiked(!userLiked)
        setPost({ ...post, likeCount: userLiked ? post.likeCount - 1 : post.likeCount + 1 })
        LikePost();
        emitUpdate();
    }


    return (
        <Stack direction="row" marginTop={5} spacing={4}>
            <Button
                onClick={like}
                variant={userLiked ? "solid" : "outline"}
                colorScheme="pink"
            ><OutlinedHeart width={15} style={{ marginRight: "5" }} />{post.likeCount}
            </Button>
            <Button
                onClick={onOpen}
                variant="outline"
                colorScheme="cyan"
            ><AnnotationIcon width={15} style={{ marginRight: "5" }} />{post.commentCount}
            </Button>
            <Comment isOpen={isOpen} post={post} onClose={onClose} />
        </Stack>
    );
}