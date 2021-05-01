import styles from '../../styles/Header.module.css';
import useAuthContext from '../../context/contextHook';

import { Avatar, Button, Stack, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Header() {
    const { user } = useAuthContext();
    const router = useRouter();

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
                            <MenuItem minH="48px">Home</MenuItem>
                            <MenuItem minH="48px">Profile</MenuItem>
                            <MenuItem minH="48px">Settings</MenuItem>
                            <MenuItem color="teal.400" minH="48px">Create</MenuItem>
                        </MenuList>
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