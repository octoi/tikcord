import cookie from 'js-cookie';
import { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    Radio,
    Stack,
    RadioGroup
} from '@chakra-ui/react';

export default function NewPost({ isOpen, onClose }) {
    const [reloadOption, setReloadOption] = useState("default");

    useEffect(() => {
        let setting = cookie.get("setting");
        if (setting) setReloadOption(setting)
    }, []);

    const changeValue = (value) => {
        cookie.set("setting", value);
        setReloadOption(value)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Settings</ModalHeader>
                <ModalCloseButton />
                <ModalBody mb={5}>
                    <RadioGroup defaultValue={reloadOption} onChange={changeValue}>
                        <Stack spacing={5} direction="column">
                            <Radio colorScheme="twitter" value={"default"}>Ask me, What to do ??</Radio>
                            <Radio colorScheme="twitter" value={"reload"}>Reload every time without asking</Radio>
                            <Radio colorScheme="twitter" value={"no_reload"}>Never ask me or reload</Radio>
                        </Stack>
                    </RadioGroup>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}