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
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Comment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        placeholder="What's in your mind ??"
                    />
                    <Button width="100%" mt={5}>Comment</Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}