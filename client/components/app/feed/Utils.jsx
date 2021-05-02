import useAuthContext from '../../../context/contextHook';
import { useState } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { HeartIcon as OutlinedHeart, AnnotationIcon } from '@heroicons/react/outline';
import { HeartIcon as FilledHeart } from '@heroicons/react/solid';


export default function Utils({ post }) {
    const { user } = useAuthContext();
    const [userLiked, setUserLiked] = useState(false);

    post?.likes.forEach(like => {
        if (like.creator.email === user.email) {
            setUserLiked(true);
        }
    });

    return (
        <Stack direction="row" marginTop={5} spacing={4}>
            <Button variant={userLiked ? "solid" : "outline"} colorScheme="pink"><OutlinedHeart width={15} style={{ marginRight: "5" }} />{post.likeCount}</Button>
            <Button variant="outline" colorScheme="cyan"><AnnotationIcon width={15} style={{ marginRight: "5" }} />{post.commentCount}</Button>
        </Stack>
    );
}