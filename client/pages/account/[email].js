import { useRouter } from 'next/router';

export default function Profile() {
    const router = useRouter();


    const { email } = router.query;

    return (
        <section>
            {email}
        </section>
    );

}
