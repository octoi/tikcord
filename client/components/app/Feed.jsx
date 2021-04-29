import styles from '../../styles/App.module.css';
import { Text, Button } from '@chakra-ui/react';
import { EmojiSadIcon } from '@heroicons/react/outline';

export default function Sidebar({ posts }) {
    return (
        <section className={styles.feedContainer}>
            <div className={styles.feedSubContainer}>
                <Text fontSize="2xl">Your Feed</Text>
                {!posts && (
                    <section style={{ marginTop: 40 }}>
                        <Text fontSize="xl" style={{ display: "flex" }} >No tiks yet <EmojiSadIcon style={{ width: 30, marginLeft: 5 }} /></Text>
                        <Button style={{ marginTop: 20 }} colorScheme="teal">Create One</Button>
                    </section>
                )}
            </div>

        </section>
    );
}