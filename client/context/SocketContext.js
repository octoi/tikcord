import io from 'socket.io-client';
import useUser from './contextHook';
import { createContext, useState, useEffect } from 'react';

export const SocketStateContext = createContext();

export function SocketContext({ children, serverUrl }) {
    const { user } = useUser();
    const [socket, setSocket] = useState();

    useEffect(() => {
        let sock = io(serverUrl, { transports: ["websocket"] });
        setSocket(sock);
    }, [serverUrl])

    useEffect(() => {
        if (!socket || !user) return;

        socket.emit("make-connection")

    }, [socket])

    return (
        <SocketStateContext.Provider value={{ socket }}>
            {children}
        </SocketStateContext.Provider>
    );
}