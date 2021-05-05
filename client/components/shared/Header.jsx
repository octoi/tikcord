import styles from '../../styles/Header.module.css';
import useAuthContext from '../../context/contextHook';
import cookie from 'js-cookie';
import NewPost from '../app/NewPost';

import { Avatar, Button, Stack, Menu, MenuList, MenuButton, MenuItem, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Header() {
    const { user, setUser } = useAuthContext();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();

    const logout = () => {
        const permission = confirm("Are you sure ?")
        if (permission) {
            cookie.remove("token");
            setUser({})
            router.push("/account/login")
        }
    }

    return (
        <div className={styles.container}>
            <h2>Tikcord</h2>
            <div>
                {user.name && (
                    <Menu>
                        <MenuButton>
                            <Avatar src={user.profile} name={user.name} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => router.push("/app")} minH="48px">Home</MenuItem>
                            <MenuItem onClick={() => router.push(`/account/${user.email}`)} minH="48px">Profile</MenuItem>
                            <MenuItem onClick={onOpen} color="teal.400" minH="48px">Create</MenuItem>
                            <MenuItem onClick={logout} color="red.400" minH="48px">Logout</MenuItem>
                        </MenuList>
                        <NewPost isOpen={isOpen} onClose={onClose} />
                    </Menu>
                )}
                {!user.name && (
                    <Stack direction="row" spacing={2} align="center">
                        <Button colorScheme="teal" variant="solid" onClick={() => router.push("/account/login")}>Login</Button>
                        <Button colorScheme="teal" variant="outline" onClick={() => router.push("/account/register")}>Register</Button>
                    </Stack>
                )}
            </div>
        </div>
    );
}