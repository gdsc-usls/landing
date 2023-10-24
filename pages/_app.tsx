import React from 'react';
import '../styles/globals.css';
import { Toaster } from 'sonner';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import SEO from '../next-seo-config';
import { Layout } from '../src/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Toaster />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}
