import Head from 'next/head';
import useAuthContext from '../context/contextHook';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
	const { user } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (Object.keys(user).length > 0) {
			router.push('/app')
			return
		}

		router.push('/account/login')

	}, [user, router])

	return (
		<div>
			<Head>
				<title>Tikcord</title>
			</Head>
		</div>
	)
}
