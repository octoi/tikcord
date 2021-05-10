import { createContext, useState } from 'react';

export const SharedStateContext = createContext();

export function SharedContext({ children }) {
    const [fetchPostData, setFetchPostData] = useState(true);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [emitUpdate, setEmitUpdate] = useState(false);

    const props = {
        fetchPostData,
        setFetchPostData,
        onlineUsers,
        setOnlineUsers,
        emitUpdate,
        setEmitUpdate
    }

    return (
        <SharedStateContext.Provider value={props}>
            {children}
        </SharedStateContext.Provider>
    );
}