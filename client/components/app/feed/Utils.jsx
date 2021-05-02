import useAuthContext from '../../../context/contextHook';
import LIKE_POST_QUERY from '../../../utils/graphql/likePostQuery';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { Stack, Button } from '@chakra-ui/react';
import { HeartIcon as OutlinedHeart, AnnotationIcon } from '@heroicons/react/outline';

export default function Utils({ post: postData }) {
    const { user } = useAuthContext();
    const [userLiked, setUserLiked] = useState(false);
    const [post, setPost] = useState(postData);
    const router = useRouter();


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
    }

    const comment = () => {
        router.push(`/app/post/${post.id}`)
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
                onClick={comment}
                variant="outline"
                colorScheme="cyan"
            ><AnnotationIcon width={15} style={{ marginRight: "5" }} />{post.commentCount}
            </Button>
        </Stack>
    );
}