import User from './users/User';
import useSharedContext from '../../context/sharedContextHook';
import styles from '../../styles/App.module.css';
import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

function filterUsersArray(array) {
    const users = [];
    const tracked = {}

    if (!array) return users;

    array.forEach(uData => {
        let user = typeof (uData) === "string" ? JSON.parse(uData) : uData;

        if (tracked[user.email]) return;

        users.push(user);
        tracked[user.email] = user.email;
    })

    return users;

}

function getPostUsers(posts) {
    const users = [];

    if (!posts) return users;

    posts.forEach(post => {
        let user = post.creator;
        users.push(user);
    });

    return users;
}

export default function Users({ posts }) {
    const [users, setUsers] = useState([]);
    const { onlineUsers } = useSharedContext();

    useEffect(() => {
        const newUsers = getPostUsers(posts);
        const users = filterUsersArray([...newUsers, ...onlineUsers]);
        setUsers(users);
    }, [posts, onlineUsers])

    return (
        <section className={styles.posts}>
            <Text fontSize="2xl">Users</Text>
            {users && users.map((user, idx) => (
                <User key={idx} user={user} />
            ))}
        </section>
    );
}