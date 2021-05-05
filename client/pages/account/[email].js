import useAuthContext from '../../context/contextHook';
import FETCH_USER_QUERY from '../../utils/graphql/fetchUserQuery';
import PostCard from '../../components/app/feed/Post';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import {
    Spinner,
    Center,
    Avatar,
    Text,
    Button
} from '@chakra-ui/react';

export default function Profile() {
    const router = useRouter();

    const { user } = useAuthContext();
    const { email } = router.query;

    if (!user) router.push("/account/login")

    const { loading, data, error } = useQuery(FETCH_USER_QUERY, { variables: { email } });

    if (data) {
        console.log(data)
    }

    return (
        <section>
            {loading && (
                <Center mt={20}>
                    <Spinner />
                </Center>
            )}

            {!loading && !data && (
                <Center mt={20} display="flex" flexDirection="column">
                    <Text fontSize="4xl">Seems Like There Is No Such User</Text>
                    <Button mt={5} variant="outline" onClick={() => router.push("/app")}>Return To Home</Button>
                </Center>
            )}
            {data && data.getUser && (
                <Center mt={10} display="flex" flexDirection="column">
                    <Avatar src={data.getUser.profile} name={data.getUser.name} width={100} height={100} />
                    <Text mt={2} fontSize="2xl">{data.getUser.name.toUpperCase()}</Text>
                    <Text fontSize="md" color="gray.200">{data.getUser.email}</Text>
                    <Text mt={2} fontSize="xl" color="gray.200">{data.getUser.bio}</Text>

                    <Button variant="outline" mt={5} onClick={() => router.push("/app")} >Return Home</Button>
                </Center>
            )}

            {data && data.getUserPosts.length === 0 && (
                <Center mt={20} display="flex" flexDirection="column">
                    <Text fontSize="xl">No Posts Yet</Text>
                </Center>
            )}
            {data && data.getUserPosts && (
                <Center mt={10} mb={10} style={{ display: "flex", flexDirection: "column" }}>
                    {data.getUserPosts.map((post, id) => {
                        post = { ...post, creator: data.getUser }

                        return <PostCard key={id} post={post} />
                    })}
                </Center>
            )}

        </section>
    );

}
