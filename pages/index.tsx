import React from 'react';
import { Hero } from '~/components';
import { Loader, HandScroll } from '~/components/GSAP';
import { About, Events, Partners, Testimonials } from '~/components/Contents';

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <HandScroll>
          <Hero />

          <section className='overflow-x-hidden overflow-y-clip '>
            <About />
            <Events />
            <Partners />
            <Testimonials />
          </section>
        </HandScroll>
      </main>
    </>
  );
}
