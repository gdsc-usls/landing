import React from 'react';
import { Hero, Content } from '~/components';
import { Loader } from '~/components/gsap/Loader';

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <Hero />
        <Content />
      </main>
    </>
  );
}
