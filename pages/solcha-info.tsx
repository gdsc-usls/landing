import React from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { markdown } from '~/utils/constants';
import { Markdown } from '~/components';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';
import type { NextPage } from 'next';

const SolchaInfo: NextPage = () => {
  useLayoutEffect(() => {
    gsap.to('body', {
      overflowY: 'scroll',
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
