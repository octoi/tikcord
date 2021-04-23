import { useContext } from 'react';
import { UserStateContext } from './AppContext';

export default function useAuthContext() {
    return useContext(UserStateContext);
}