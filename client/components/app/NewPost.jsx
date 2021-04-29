import { useState, useRef } from 'react';
import {
    Button,
    Input,
    Textarea,
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
    const [post, setPost] = useState({ video: '', description: '' });

    const fileInput = useRef();

    const selectFile = () => {
        const fileInputEl = fileInput.current;

        fileInputEl.click();

        fileInputEl.addEventListener("change", (event) => {
            let file = event.target.files[0];
            var reader = new FileReader();

            reader.onloadend = () => setPost({ ...post, video: reader.result });

            if (file) reader.readAsDataURL(file);
        });
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Your Tik</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Button mb={5} width="100%" onClick={selectFile}>Select a video</Button>
                    <Textarea
                        placeholder="description"
                        value={post.description}
                        onChange={(e) => setPost({ ...post, description: e.target.value })}
                    />
                    <VisuallyHidden>
                        <Input
                            ref={fileInput}
                            type="file"
                            accept="video/*"
                        />
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