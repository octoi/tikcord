import { createContext, useState } from 'react';

export const SharedStateContext = createContext();

export function SharedContext({ children }) {
    const [fetchPostData, setFetchPostData] = useState(false);

    return (
        <SharedStateContext.Provider value={{ fetchPostData, setFetchPostData }}>
            {children}
        </SharedStateContext.Provider>
    );
}