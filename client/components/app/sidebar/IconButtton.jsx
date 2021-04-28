import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import styles from '../../../styles/App.module.css';

export default function IconButton({ Icon, text, link, mt }) {
    const router = useRouter();

    return (
        <Button
            colorScheme="twitter"
            variant="ghost"
            onClick={() => router.push(link)}
            style={{ display: "flex", alignItems: "center", marginTop: mt ? 20 : 0 }}
        >
            <Icon style={{ width: 20, height: 20, marginRight: 10 }} />
            <p style={{ fontSize: 18 }}>{text}</p>
        </Button>
    );

}