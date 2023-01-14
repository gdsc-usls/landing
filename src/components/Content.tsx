import React from 'react';
import { About, Events, Partners } from '.';

export const Content = () => {
  return (
    <section className='overflow-x-hidden overflow-y-clip '>
      <About />
      <Events />
      <Partners />
    </section>
  );
};
