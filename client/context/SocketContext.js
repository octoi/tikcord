import io from 'socket.io-client';
import useUser from './contextHook';
import useSharedContext from './sharedContextHook';
import { createContext, useState, useEffect } from 'react';

export const SocketStateContext = createContext();

export function SocketContext({ children, serverUrl }) {
    const { user } = useUser();
    const { setOnlineUsers, onlineUsers } = useSharedContext();
    const [socket, setSocket] = useState();

    useEffect(() => {
        if (socket) return;
        let sock = io(serverUrl, { transports: ["websocket"] });
        setSocket(sock);
    }, [serverUrl])

    useEffect(() => {
        if (!socket || Object.keys(user).length === 0) return;

        socket.emit("make-connection", user, (res) => setOnlineUsers(Object.values(res.onlineUsers)));

        socket.on("user-join", userData => setOnlineUsers([...onlineUsers, JSON.stringify(userData)]));

        socket.on("user-left", users => {
            if (!users) return;
            setOnlineUsers(Object.values(users))
        })

        socket.on("update", () => {
            console.log("update")
            alert("updated")
        })

    }, [socket, user])

    return (
        <SocketStateContext.Provider value={{ socket }}>
            {children}
        </SocketStateContext.Provider>
    );
}