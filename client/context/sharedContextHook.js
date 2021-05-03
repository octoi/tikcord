import { useContext } from 'react';
import { SharedStateContext } from './SharedContext';

export default function useSharedContext() {
    return useContext(SharedStateContext);
}