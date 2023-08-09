import React from 'react';
import '../styles/globals.css';
import { Toaster } from 'sonner';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from '~/contexts/GlobalContext';

import SEO from '../next-seo-config';
import { Layout } from '../src/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Toaster />
      <GlobalContextProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </GlobalContextProvider>
    </Layout>
  );
}
