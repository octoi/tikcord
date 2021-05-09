import {
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    ModalContent,
} from '@chakra-ui/react';

export default function NewPost({ isOpen, onClose }) {

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Settings</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="twitter">Create</Button>
                    <Button
                        ml={3}
                        onClick={() => {
                            onClose();
                        }}
                        variant="ghost"
                    >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}