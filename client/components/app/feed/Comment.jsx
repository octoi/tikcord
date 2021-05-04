import { useState } from 'react';
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



export default function Comment({ isOpen, onClose, postComments }) {
    const [comment, setComment] = useState("");

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
                    <Button width="100%" mt={5}>Comment</Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}