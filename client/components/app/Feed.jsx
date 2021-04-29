import styles from '../../styles/App.module.css';
import NoPosts from './feed/NoPosts';
import { Text, AspectRatio } from '@chakra-ui/react'

export default function Sidebar({ posts }) {
    return (
        <section className={styles.feedContainer}>
            <div className={styles.feedSubContainer}>
                <Text fontSize="2xl">Your Feed</Text>
                {!posts && <NoPosts />}
                <AspectRatio style={{ width: 500 }} ratio={16 / 9}>
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </AspectRatio>
            </div>
        </section>
    );
}