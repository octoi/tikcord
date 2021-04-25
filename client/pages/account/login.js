import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import styles from '../../styles/Login.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Text, Input, Button, Link } from '@chakra-ui/react';

export default function Login() {
    const { user, setUser } = useAuthContext();
    const [loginUser, setLoginUser] = useState({ email: '', password: '' });
    const router = useRouter();

    if (user.name) router.push('/app');

    const submitForm = (event) => {
        event.preventDefault();
    }

    return (
        <section>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login to unleash your creativity" />
            </Head>

            <div className={styles.container}>
                <Text fontSize="4xl" style={{ fontWeight: "600" }}>Login Tikcord</Text>
                <form style={{ marginTop: "50px" }} onSubmit={submitForm}>

                    <Input
                        placeholder="Email address"
                        type="email"
                        value={loginUser.email}
                        onChange={e => setLoginUser({ ...loginUser, email: e.target.value })}
                    />
                    <Input
                        className={styles.mt}
                        placeholder="Password"
                        type="password"
                        value={loginUser.password}
                        onChange={e => setLoginUser({ ...loginUser, password: e.target.value })}
                    />

                    <div className={styles.utils}>
                        <Button colorScheme="teal" variant="outline">Login</Button>
                        <Link href="/account/register" color="teal.200">Don't have an account ?? register</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}