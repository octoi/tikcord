import styles from '../../styles/App.module.css';
import { Text } from '@chakra-ui/react';

export default function Sidebar() {
    return (
        <div className={styles.feedContainer}>
            <Text fontSize="2xl">Your Feed</Text>

        </div>
    );
}