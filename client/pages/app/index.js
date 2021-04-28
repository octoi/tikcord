import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import styles from '../../styles/App.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// components

import Sidebar from '../../components/app/Sidebar';
import Feed from '../../components/app/Feed';
import Users from '../../components/app/Users';

export default function App() {
    const { user, setUser } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(user).length == 0) router.push('/account/login');
    }, [user, router]);

    return (
        <section style={{ marginTop: 30 }}>
            <Head>
                <title>Tikcord</title>
                <meta name="description" content="Unleash your creativity" />
            </Head>

            <div className={styles.grid}>
                <Sidebar />
                <Feed />
                <Users />
            </div>

        </section>
    );

}