import cookie from 'js-cookie';
import { createContext, useState, useEffect } from 'react';

export const SharedStateContext = createContext();

export function SharedContext({ children }) {
    const [fetchPostData, setFetchPostData] = useState(true);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [setting, setSetting] = useState("default");

    useEffect(() => {
        let reloadSetting = cookie.get("setting")
        if (reloadSetting) setSetting(reloadSetting)
    }, []);

    const props = {
        fetchPostData,
        setFetchPostData,
        onlineUsers,
        setOnlineUsers,
        setting,
        setSetting
    }

    return (
        <SharedStateContext.Provider value={props}>
            {children}
        </SharedStateContext.Provider>
    );
}