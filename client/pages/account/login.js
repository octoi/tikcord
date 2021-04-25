import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import styles from '../../styles/Login.module.css';
import cryptoJs from 'crypto-js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Text, Input, Button, Link } from '@chakra-ui/react';
import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';

export default function Login() {
    const { user, setUser } = useAuthContext();
    const [loginUser, setLoginUser] = useState({ email: '', password: '' });
    const [feedbackAlert, setFeedbackAlert] = useState({ visibility: false, title: '' });
    const router = useRouter();

    if (user.name) router.push('/app');

    const submitForm = (event) => {
        event.preventDefault();

        if (loginUser.password.length < 6) {
            setFeedbackAlert({
                visibility: true,
                title: 'Password must be at least 6 characters !',
            });
        }

        setLoginUser({ ...loginUser, password: cryptoJs.MD5(loginUser.password) }); // hashing password

    }

    return (
        <section>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login to unleash your creativity" />
            </Head>

            {/* feedback alert */}
            {feedbackAlert.visibility && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>{feedbackAlert.title}</AlertTitle>
                    <CloseButton
                        onClick={() => setFeedbackAlert({ ...feedbackAlert, visibility: false })}
                        position="absolute"
                        right="8px"
                        top="8px"
                    />
                </Alert>
            )}

            <div className={styles.container}>
                <Text fontSize="4xl" style={{ fontWeight: "600" }}>Login Tikcord</Text>
                <form style={{ marginTop: "50px" }} onSubmit={submitForm}>

                    <Input
                        placeholder="Email address"
                        type="email"
                        onChange={e => setLoginUser({ ...loginUser, email: e.target.value })}
                        required
                    />
                    <Input
                        className={styles.mt}
                        placeholder="Password"
                        type="password"
                        onChange={e => setLoginUser({ ...loginUser, password: e.target.value })}
                        required
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