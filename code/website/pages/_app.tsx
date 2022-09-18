import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthProvider from '../context/AuthProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>fundify</title>
            </Head>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </>
    );
}

export default MyApp
