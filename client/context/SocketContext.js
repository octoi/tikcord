import io from 'socket.io-client';
import { createContext, useState, useEffect } from 'react';

export const SocketStateContext = createContext();

export function SocketContext({ children, serverUrl }) {
    const [socket, setSocket] = useState();

    useEffect(() => {
        let sock = io(serverUrl, { transports: ["websocket"] });
        setSocket(sock);
    }, [])

    return (
        <SocketStateContext.Provider value={{ socket }}>
            {children}
        </SocketStateContext.Provider>
    );
}