import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import { useRouter } from 'next/router';
// import {  } from '@chakra-ui/react';

export default function Login() {
    const { user, setUser } = useAuthContext();
    const router = useRouter();

    if (user) router.push('/app');

    return (
        <section>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login to unleash your creativity" />
            </Head>
        </section>
    );
}