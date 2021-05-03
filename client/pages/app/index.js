import Head from 'next/head';
import useAuthContext from '../../context/contextHook';
import styles from '../../styles/App.module.css';
import FETCH_POST_QUERY from '../../utils/graphql/fetchPostsQuery';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

// components

import Sidebar from '../../components/app/Sidebar';
import Feed from '../../components/app/Feed';
import Users from '../../components/app/Users';

export default function App() {
    const { user } = useAuthContext();

    const [posts, setPosts] = useState([]);
    const { loading, data } = useQuery(FETCH_POST_QUERY);

    const router = useRouter();


    useEffect(() => {
        if (Object.keys(user).length == 0) router.push('/account/login');
    }, [user, router]);

    useEffect(() => {
        setPosts(data?.getPosts)
    }, [data]);

    return (
        <section style={{ marginTop: 30 }}>
            <Head>
                <title>Tikcord</title>
                <meta name="description" content="Unleash your creativity" />
            </Head>

            <div className={styles.grid}>
                <Sidebar />
                <Feed posts={posts} loading={loading} />
                <Users posts={posts} />
            </div>

        </section>
    );

}