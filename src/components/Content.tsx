import React from 'react';
import { About, Events } from '.';

export const Content = () => {
  return (
    <section className='overflow-x-hidden overflow-y-clip '>
      <About />
      <Events />
    </section>
  );
};
