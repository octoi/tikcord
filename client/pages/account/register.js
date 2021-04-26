import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import styles from '../../styles/Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Text, Input, Button, Link } from '@chakra-ui/react';
import { Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react';

export default function Register() {
    const { user, setUser } = useAuthContext();
    const [loginUser, setLoginUser] = useState({ name: '', email: '', password: '', repass: '' });
    const [feedbackAlert, setFeedbackAlert] = useState({ visibility: false, title: '' });
    const router = useRouter();

    if (user.name) router.push("/app");

    const submitForm = (event) => {
        event.preventDefault();

        if (loginUser.password < 6) {
            setFeedbackAlert({ visibility: true, title: 'Password must be at least 6 characters !' })
            return;
        }

        if (loginUser.password !== loginUser.repass) {
            setFeedbackAlert({ visibility: true, title: 'Password must be match !' })
            return;
        }

    }

    return (
        <section>
            <Head>
                <title>Register</title>
                <meta name="description" content="register to unleash your creativity" />
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
                <Text fontSize="4xl" style={{ fontWeight: "600" }}>Register Tikcord</Text>
                <form style={{ marginTop: "50px" }} onSubmit={submitForm}>

                    <Input
                        placeholder="Full name"
                        type="text"
                        onChange={e => setLoginUser({ ...loginUser, name: e.target.value })}
                        required
                    />
                    <Input
                        className={styles.mt}
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
                    <Input
                        className={styles.mt}
                        placeholder="Retype password"
                        type="password"
                        onChange={e => setLoginUser({ ...loginUser, repass: e.target.value })}
                        required
                    />

                    <div className={styles.utils}>
                        <Button colorScheme="teal" variant="outline">Register</Button>
                        <Link href="/account/login" color="teal.200">Already have an account ?? Login</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}