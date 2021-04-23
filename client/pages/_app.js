import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    }
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <AppContext>
                <Component {...pageProps} />
            </AppContext>
        </ChakraProvider>
    )
}

export default MyApp
