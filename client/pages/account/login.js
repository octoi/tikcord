import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import styles from '../../styles/Login.module.css';
import { useRouter } from 'next/router';
import { Text, Input, Button } from '@chakra-ui/react';

export default function Login() {
    const { user, setUser } = useAuthContext();
    const router = useRouter();

    if (user.name) {
        router.push('/app');
    }

    return (
        <section>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login to unleash your creativity" />
            </Head>

            <div className={styles.container}>
                <Text fontSize="4xl" style={{ fontWeight: "600" }}>Login Tikcord</Text>
                <form style={{ marginTop: "50px" }}>
                    <Input placeholder="Email address" />
                    <Input className={styles.mt} placeholder="Password" type="password" />
                    <Button className={styles.mt} colorScheme="teal" variant="outline">Login</Button>
                </form>
            </div>
        </section>
    );
}