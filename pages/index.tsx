import React from 'react';
import { Hero } from '~/components';
import { Loader } from '~/components/GSAP';
import {
  About,
  Events,
  Contact,
  Partners,
  Testimonials,
} from '~/components/Contents';

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <Hero />

        <div className='overflow-x-hidden overflow-y-clip '>
          <About />
          <Events />
          <Partners />
          <Testimonials />
        </div>

        <Contact />
      </main>
    </>
  );
}
