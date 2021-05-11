import io from 'socket.io-client';
import cookie from 'js-cookie';
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

        socket.on("update", email => {
            if (email === user.email) return;

            let setting = cookie.get("setting");

            if (setting === "reload") {
                window.location.reload();
                return;
            }
            if (setting === "no_reload") return;
            else {
                const permission = confirm("Do you wanna reload for latest changes ??");
                if (permission) window.location.reload();
            }
        })

        return (() => {
            socket.emit("quit");
        })

    }, [socket, user])

    // socket functions

    const emitUpdate = () => {
        if (!socket) return;
        socket.emit("emit-update", user.email)
    }

    const values = {
        socket,
        emitUpdate
    }

    return (
        <SocketStateContext.Provider value={values}>
            {children}
        </SocketStateContext.Provider>
    );
}