import { createContext, useState } from 'react';
import { getUser } from './auth';

export const UserStateContext = createContext();

export function AppContext({ children }) {
    const [user, setUser] = useState({});

    const userFromSession = getUser();
    if (userFromSession && userFromSession.token != user.token) setUser(userFromSession);

    return (
        <UserStateContext.Provider value={{ user, setUser }}>
            {children}
        </UserStateContext.Provider>
    );

}