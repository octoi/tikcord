import useAuthContext from '../../../context/contextHook';
import Link from 'next/link';
import { Text, Avatar } from '@chakra-ui/react';

export default function User({ user }) {
    const { user: currentUser } = useAuthContext();
    const displayUser = currentUser?.email != user.email;

    if (Object.keys(user).length === 0) return;

    return (
        <>
            {displayUser && (
                <div style={{ display: "flex", marginTop: "10px", alignItems: "center", cursor: "pointer" }}>
                    <Link href={`/account/${user.email}`}>
                        <Avatar src={user.profile} name={user.name} />
                    </Link>
                    <div style={{ marginLeft: "10px" }}>
                        <Text fontSize="lg">{user.name}</Text>
                        <Text style={{ color: "#CBD5E0" }} fontSize="md">{user.email}</Text>
                    </div>
                </div>
            )}
        </>
    );
}