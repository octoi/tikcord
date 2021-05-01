import '../styles/globals.css';
import cookie from 'js-cookie';
import Header from '../components/shared/Header';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';


const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    }
});

const authLink = setContext(() => {
    const token = cookie.get("token");
    return {
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    uri: process.env.SERVER_URL || 'http://localhost:8080',
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <ApolloProvider client={client}>
                <AppContext>
                    <Header />
                    <Component {...pageProps} />
                </AppContext>
            </ApolloProvider>
        </ChakraProvider>
    )
}

export default MyApp
