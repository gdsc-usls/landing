import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '~/contexts/GlobalContext';
import { Layout } from '../src/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </Layout>
  );
}
