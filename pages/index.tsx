import React from 'react';
import { Hero, Content } from '~/components';
import { Loader } from '~/components/gsap/Loader';
import HandScrollAnimation from '~/components/gsap/ScrollTrig';

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <HandScrollAnimation>
          <Hero />
          <Content />
        </HandScrollAnimation>
      </main>
    </>
  );
}
