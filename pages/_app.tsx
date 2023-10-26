import React from 'react';
import '../styles/globals.css';
import { Toaster } from 'sonner';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import { ScrollAnimation } from '~/components/GSAP';
import SEO from '../next-seo-config';
import { Layout } from '../src/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollAnimation>
      <Layout>
        <Toaster />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </ScrollAnimation>
  );
}
