import CREATE_POST_QUERY from '../../utils/graphql/createPostQuery';
import uploadImage from '../../utils/api/imageUploader';
import { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import {
    Button,
    Input,
    Textarea,
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

export default function NewPost({ isOpen, onClose }) {
    const [post, setPost] = useState({ post: '', description: '', fileName: 'Select a file' });
    const [loader, setLoader] = useState(false);

    const fileInput = useRef();

    useEffect(() => {
        if (post?.post?.length > 0) setLoader(false);
    }, [post])

    const [CreatePost] = useMutation(CREATE_POST_QUERY, {
        variables: { content: post.post, description: post.description },
        update() {
            setLoader(false);
            setPost({ post: '', description: '', fileName: 'Select a file' })
            onClose();
        },
        onError() {
            setLoader(false)
            setPost({ post: '', description: '', fileName: 'Select a file' })
            alert("oops something went wrong")
            onClose();
        }
    });

    const imagePicker = () => {
        let fileUploader = fileInput.current;

        fileUploader.click();

        fileUploader.addEventListener("change", (event) => {
            setLoader(true)
            let file = event.target.files[0];

            var reader = new FileReader();

            reader.onloadend = (event) => {
                setPost({ ...post, post: event.target.result.split(",").pop(), fileName: file.name });
            }

            if (file) reader.readAsDataURL(file);
        });
    }

    const submitForm = () => {
        if (post.post.length === 0 || post.description.length === 0) {
            alert("Please complete the form");
            return;
        }

        setLoader(true);

        uploadImage(post.post).then(imgUrl => {

            setPost({ ...post, post: imgUrl });
            CreatePost();

        }).catch(() => {

            alert("Oops something went wrong !!");

            setPost({})
            setLoader(false);
            onClose();

        })

    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Your Tik</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Progress visibility={true} colorScheme="twitter" mb={5} size="xs" isIndeterminate style={{ display: `${loader ? "block" : "none"}` }} />
                    <Button mb={5} width="100%" onClick={imagePicker}>{post.fileName}</Button>
                    <Textarea
                        placeholder="description"
                        value={post.description}
                        onChange={(e) => setPost({ ...post, description: e.target.value })}
                    />
                    <VisuallyHidden>
                        <Input
                            ref={fileInput}
                            type="file"
                            accept="image/*"
                        />
                    </VisuallyHidden>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="twitter" onClick={submitForm}>Create</Button>
                    <Button
                        ml={3}
                        onClick={() => {
                            setPost({ post: '', description: '', fileName: 'Select a file' });
                            onClose();
                        }}
                        variant="ghost"
                    >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}