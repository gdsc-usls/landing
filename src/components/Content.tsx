import React from 'react';
import { About, Events, Partners, Testimonials } from '.';

export const Content = () => {
  return (
    <section className='overflow-x-hidden overflow-y-clip '>
      <About />
      <Events />
      <Partners />
      <Testimonials />
    </section>
  );
};
