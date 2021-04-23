import styles from '../../styles/Header.module.css';
import useAuthContext from '../../context/contextHook';

import { Avatar, Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Header() {
    const { user } = useAuthContext();
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h2>Tikcord</h2>
            <div>
                {user.name && (
                    <Avatar src={user.profile} name={user.name} />
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