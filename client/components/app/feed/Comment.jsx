import COMMENT_POST_QUERY from '../../../utils/graphql/commentPostQuery';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
    Button,
    Input,
    Progress,
    VisuallyHidden,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    ModalContent,
} from '@chakra-ui/react';



export default function Comment({ isOpen, onClose, post }) {
    const [comment, setComment] = useState("");

    const [CommentPost] = useMutation(COMMENT_POST_QUERY, {
        variables: { content: comment, post: post.id },
        update: () => {
            alert("created comment")
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
        CommentPost();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Comment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        placeholder="What's in your mind ??"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <Button onClick={commentPost} width="100%" mt={5}>Comment</Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}