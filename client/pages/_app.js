import '../styles/globals.css';
import Header from '../components/shared/Header';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    }
});

const client = new ApolloClient({
    uri: process.env.SERVER_URL || 'http://localhost:5000',
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
