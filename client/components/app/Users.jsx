import User from './users/User';
import useSharedContext from '../../context/sharedContextHook';
import styles from '../../styles/App.module.css';
import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

function getUsers(posts) {
    const users = [];
    const tracked = {};

    if (!posts) return users;

    posts.forEach(post => {
        let user = post.creator;

        if (tracked[user.email]) return;

        users.push(user);
        tracked[user.email] = user.email;

    });

    return users;
}

export default function Users({ posts }) {
    const [users, setUsers] = useState([]);
    const { onlineUsers } = useSharedContext();

    useEffect(() => {
        const newUsers = getUsers(posts);
        console.log(onlineUsers);
        setUsers([...newUsers, ...onlineUsers]);
    }, [posts])

    return (
        <section className={styles.posts}>
            <Text fontSize="2xl">Users</Text>
            {users && users.map((user, idx) => (
                <User key={idx} user={user} />
            ))}
        </section>
    );
}