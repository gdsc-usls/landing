import React from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import type { NextPage } from 'next';
import { Markdown } from '~/components';
import { markdown } from '~/utils/constants';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';

const SolchaInfo: NextPage = () => {
  useLayoutEffect(() => {
    gsap.to('body', {
      overflowY: 'scroll',
    });

    gsap.to('.menu-burger, .logo', {
      duration: 0.5,
      opacity: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className='py-40 px-7 sm:px-10 md:px-20  lg:px-44 xl:px-60'>
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
