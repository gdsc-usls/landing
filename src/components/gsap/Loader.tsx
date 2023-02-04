import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import useLayoutEffect from '../hooks/use-isomorphic-layout-effect';

export const Loader = () => {
  const [unmount, setUnmount] = useState(false);

  const loaderTl = () => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1.5,
      ease: 'power3.inOut',
    });

    tl.to('.text-load', {
      duration: 2,
      opacity: 1,
      stagger: 0.3,
    })
      .to(
        '#gdsc-logo',
        {
          duration: 1,
          opacity: 1,
        },
        '-=0.9'
      )
      .to(
        '#gdsc-logo,.text-load',
        {
          duration: 1,
          opacity: 0,
        },
        '+=0.7'
      )
      .to(
        '#loader-bg',
        {
          duration: 1,
          opacity: 0,
        },
        '+=0.5'
      )
      .to(
        'body',
        {
          overflowY: 'auto',
          onComplete: () => setUnmount(true),
        },
        '>'
      );
  };

  useLayoutEffect(() => {
    gsap.timeline().add(loaderTl);
  }, []);

  // // scroll to top before page reload
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as any,
      });
    }, 0);
  }, []);

  return (
    <>
      (
      {!unmount && (
        <div
          id='loader-bg'
          className='absolute top-0 left-0 z-50 grid h-screen w-screen place-items-center bg-black'
        >
          <div>
            <Image
              priority
              src='/images/icons/gdsc-logo.svg'
              alt='GDSC Logo'
              height={120}
              width={120}
              className='mx-auto mb-5 scale-75 opacity-0 md:scale-100'
              id='gdsc-logo'
            />
            <div className='flex gap-4 font-montserrat text-lg text-white'>
              <p className='text-load opacity-0'>Connect,</p>
              <p className='text-load opacity-0'>Learn,</p>
              <p className='text-load opacity-0'>Grow</p>
            </div>
          </div>
        </div>
      )}
      )
    </>
  );
};
