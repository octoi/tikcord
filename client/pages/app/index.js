import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App() {
    const { user, setUser } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(user).length > 0) router.push('/app');
    }, [user, router]);

    return (
        <section>
            <Head>
                <title>Tikcord</title>
                <meta name="description" content="Unleash your creativity" />
            </Head>
        </section>
    );

}