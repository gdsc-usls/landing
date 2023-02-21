import React from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { markdown } from '~/utils/constants';
import { Markdown } from '~/components';
import type { NextPage } from 'next';

const SolchaInfo: NextPage = () => {
  gsap.to('body', {
    overflowY: 'scroll',
  });

  return (
    <section className='space-y-12 p-40'>
      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none object-contain object-top opacity-75 xl:-translate-y-96'
      />
      <Markdown content={markdown.solcha} />
    </section>
  );
};

export default SolchaInfo;
