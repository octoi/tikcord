import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

export default function IconButton({ Icon, text, link, mt, solid }) {
    const router = useRouter();

    return (
        <Button
            colorScheme="twitter"
            variant={solid ? "solid" : "ghost"}
            onClick={() => router.push(link)}
            style={{ display: "flex", alignItems: "center", marginTop: mt ? 20 : 0, width: 150, justifyContent: "start" }}
        >
            <Icon style={{ width: 20, height: 20, marginRight: 10 }} />
            <p style={{ fontSize: 18 }}>{text}</p>
        </Button>
    );

}