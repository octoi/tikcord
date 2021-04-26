import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import styles from '../../styles/Login.module.css';
import { useState } from 'react';
import { Text, Input, Button, Link } from '@chakra-ui/react';

export default function Register() {

    const [loginUser, setLoginUser] = useState({ name: '', email: '', password: '', repass: '' });

    const submitForm = (event) => {
        event.preventDefault();
    }

    return (
        <section>
            <Head>
                <title>Register</title>
                <meta name="description" content="register to unleash your creativity" />
            </Head>

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