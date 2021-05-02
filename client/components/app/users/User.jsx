import { Text, Avatar } from '@chakra-ui/react';

export default function User({ user }) {
    return (
        <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
            <Avatar src={user.profile} name={user.name} />
            <div style={{ marginLeft: "10px" }}>
                <Text fontSize="lg">{user.name}</Text>
                <Text style={{ color: "#CBD5E0" }} fontSize="md">{user.email}</Text>
            </div>
        </div>
    );
}