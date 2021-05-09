import '../styles/globals.css';
import cookie from 'js-cookie';
import Header from '../components/shared/Header';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';
import { SharedContext } from '../context/SharedContext';
import { SocketContext } from '../context/SocketContext';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';


const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    }
});

const serverUrl = process.env.SERVER_URL || 'http://localhost:5000';

const httpLink = createHttpLink({ uri: serverUrl + "/gql" });

const authLink = setContext(() => {
    const token = cookie.get("token");
    return {
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {

    return (
        <ChakraProvider theme={theme}>
            <ApolloProvider client={client}>
                <AppContext>
                    <SharedContext>
                        <SocketContext serverUrl={serverUrl}>
                            <Header />
                            <Component {...pageProps} />
                        </SocketContext>
                    </SharedContext>
                </AppContext>
            </ApolloProvider>
        </ChakraProvider>
    )
}

export default MyApp
