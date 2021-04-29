import { Text, Button } from '@chakra-ui/react';
import { EmojiSadIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function NoPosts() {
    const router = useRouter();

    return (
        <section style={{ marginTop: 40 }}>
            <Text fontSize="xl" style={{ display: "flex" }} >No tiks yet <EmojiSadIcon style={{ width: 30, marginLeft: 5 }} /></Text>
            <Button onClick={() => router.push("/app/new")} style={{ marginTop: 20 }}>Create One</Button>
        </section>
    );
}