import React from 'react';
import { Hero } from '~/components';
import { Loader, ScrollAnimation } from '~/components/GSAP';
import { About, Events, Partners, Testimonials } from '~/components/Contents';

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <ScrollAnimation>
          <Hero />

          <section className='overflow-x-hidden overflow-y-clip '>
            <About />
            <Events />
            <Partners />
            <Testimonials />
          </section>
        </ScrollAnimation>
      </main>
    </>
  );
}
