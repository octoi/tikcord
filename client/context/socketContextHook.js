import { useContext } from 'react';
import { SocketStateContext } from './SocketContext';

export default function useSocketContext() {
    return useContext(SocketStateContext);
}