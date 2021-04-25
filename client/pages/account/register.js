import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import styles from '../../styles/Login.module.css';
import { useState } from 'react';
import { Text, Input, Button, Link } from '@chakra-ui/react';

export default function Register() {

    const submitForm = (event) => {
        event.preventDefault();
    }

    return (
        <section>
            <Head>
                <title>Register</title>
                <meta name="description" content="register to unleash your creativity" />
            </Head>

            <div className="styles.container">
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