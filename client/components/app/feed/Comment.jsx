import useAuthContext from '../../../context/contextHook';
import COMMENT_POST_QUERY from '../../../utils/graphql/commentPostQuery';
import DELETE_COMMENT_QUERY from '../../../utils/graphql/deleteCommentQuery';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import {
    Button,
    Input,
    Progress,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    Avatar,
    Text
} from '@chakra-ui/react';



export default function Comment({ isOpen, onClose, post }) {
    const [comment, setComment] = useState("");
    const [commentId, setCommentId] = useState("");
    const [postData, setPostData] = useState(post);
    const [loader, setLoader] = useState(false);

    const { user } = useAuthContext();
    const router = useRouter();

    const [CommentPost] = useMutation(COMMENT_POST_QUERY, {
        variables: { content: comment, post: post.id },
        update: () => {
            let newComment = { content: comment, creator: JSON.stringify(user) };

            const comments = [...postData.comments];
            comments.reverse();
            comments.push(newComment)

            setPostData({ ...postData, comments });
            setComment("");
            setLoader(false);
        },
        onError: (err) => {
            console.log(err.message);
        }
    });

    const [DeleteComment] = useMutation(DELETE_COMMENT_QUERY, {
        variables: { comment: commentId },
        update: () => {
            let comments = [...postData.comments];
            comments = comments.filter(comment => comment.id !== commentId);

            setPostData({ ...postData, comments })

        },
        onError: (err) => {
            console.log(err.message);
        }
    })

    const commentPost = () => {
        if (comment.trim().length === 0) {
            alert("Can you please comment ...");
            return;
        }

        setLoader(true)
        CommentPost();
    }

    const deleteComment = (id) => {
        const permission = confirm("are you sure ??");
        if (!permission) return;

        setCommentId(id)
        DeleteComment();
    }



    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Comment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Progress visibility={true} colorScheme="twitter" mb={5} size="xs" isIndeterminate style={{ display: `${loader ? "block" : "none"}` }} />
                    <Input
                        placeholder="What's in your mind ??"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <Button onClick={commentPost} width="100%" mt={5} mb={5}>Comment</Button>
                    {postData?.comments.map((comment, id) => {
                        const creator = JSON.parse(comment.creator);
                        return (
                            <div style={{ marginTop: "15px", marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div style={{ display: "flex" }}>
                                    <Avatar src={creator.profile} name={creator.name} mr={2} />
                                    <div>
                                        <Text fontSize="sm" color="gray.500">{creator.name}</Text>
                                        <Text>{comment.content}</Text>
                                    </div>
                                </div>
                                {user.email === creator.email && (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => {
                                            !comment.id
                                                ? router.reload(window.location.pathname)
                                                : deleteComment(comment.id);
                                        }}
                                    >{!comment.id ? "R" : "DELETE"}</Button>
                                )}
                            </div>
                        );
                    })}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}