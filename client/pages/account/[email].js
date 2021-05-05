import useAuthContext from '../../context/contextHook';
import { useRouter } from 'next/router';

export default function Profile() {
    const router = useRouter();

    const { user } = useAuthContext();
    const { email } = router.query;

    if (!user) router.push("/account/login")
    if (!email) router.push("/app")

    return (
        <section>
        </section>
    );

}
