import { useState, useRef } from 'react';
import {
    Button,
    Input,
    VisuallyHidden,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    ModalContent,
} from '@chakra-ui/react';

export default function NewPost({ isOpen, onClose }) {
    const fileInput = useRef();

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Your Tik</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Button mb={5} width="100%">select a file</Button>
                    <Input placeholder="description" />
                    <VisuallyHidden>
                        <Input ref={fileInput} type="file" />
                    </VisuallyHidden>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="twitter">Create</Button>
                    <Button ml={3} onClick={onClose} variant="ghost">Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}