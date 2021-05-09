import io from 'socket.io-client';
import useUser from './contextHook';
import { createContext, useState, useEffect } from 'react';

export const SocketStateContext = createContext();

export function SocketContext({ children, serverUrl }) {
    const { user } = useUser();
    const [socket, setSocket] = useState();

    useEffect(() => {
        if (socket) return;
        let sock = io(serverUrl, { transports: ["websocket"] });
        setSocket(sock);
    }, [serverUrl])

    useEffect(() => {
        if (!socket || !user) return;

        socket.emit("make-connection", user, (res) => {
            console.log(res)
        })

    }, [socket])

    return (
        <SocketStateContext.Provider value={{ socket }}>
            {children}
        </SocketStateContext.Provider>
    );
}