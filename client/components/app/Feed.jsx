import styles from '../../styles/App.module.css';
import NoPosts from './feed/NoPosts';
import AllPosts from './feed/AllPosts';
import { Text } from '@chakra-ui/react'

export default function Sidebar({ posts }) {
    return (
        <section className={styles.feedContainer}>
            <div className={styles.feedSubContainer}>
                <Text fontSize="2xl">Your Feed</Text>
                {!posts && <NoPosts />}
                <AllPosts />
            </div>
        </section>
    );
}