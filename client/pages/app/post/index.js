import useAuthContext from '../../../context/contextHook';
import { useRouter } from 'next/router';

export default function Post() {
    const { user } = useAuthContext();
    const router = useRouter();

    const redirectPath = user ? '/app' : '/account/login'
    router.push(redirectPath)

    return (
        <section>

        </section>
    );
}