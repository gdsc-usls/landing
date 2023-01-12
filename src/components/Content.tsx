import React from 'react';
import Image from 'next/image';

export const Content = () => {
  return (
    <section className='relative overflow-x-hidden overflow-y-clip py-48 px-10 text-white sm:py-56 md:px-20 md:py-96 lg:px-32 xl:py-[26rem]'>
      <Image
        priority
        src='/images/gradients/gradientGreenBlue.png'
        alt='Gradient Green'
        height={800}
        width={800}
        className='pointer-events-none absolute top-[30%] -left-72 z-[-1] sm:-left-96 md:-left-[30rem]'
      />
      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none z-[-2] translate-y-1/3 object-contain object-top opacity-80'
      />
      <div className='mx-auto mb-40 xl:w-3/4'>
        <h2 className='text-title mr-auto mb-5 sm:mb-10'>
          Google Developer <br /> Student Clubs —
        </h2>
        <p className='text-body ml-auto w-full text-right font-merchant-thin sm:w-[80%] md:leading-8 lg:w-[65%]'>
          The quick brown fox jumps over the lazy dog near the bank of the river
          the quick brown fox jumps over the lazy dog near the bank of the
          river.
        </p>
      </div>
      <div className='flex flex-col-reverse gap-20  lg:flex-row lg:justify-between'>
        <Image
          priority
          src='/images/elements/swirlGlass.png'
          alt='Swirl Glass'
          height={800}
          width={600}
          className='pointer-events-none -translate-y-20  rotate-12 md:rotate-0  xl:translate-x-40'
        />
        <div className='ml-auto flex flex-col text-right'>
          <p className='font-merchant-semibold leading-[0.7] [fontSize:clamp(5rem,15vw,10rem)]'>
            USLS
          </p>
          <p className='text-right font-montserrat uppercase [fontSize:clamp(0.6rem,1.5vw,1rem)]'>
            University of St. La Salle <br /> — Bacolod{' '}
          </p>
        </div>
      </div>
      <div className='relative'>
        <div className='mx-auto text-white xl:w-3/4'>
          <h3 className='text-title mb-2  md:mb-5 lg:translate-x-6 2xl:-translate-x-20 2xl:text-center'>
            GDSC - USLS
          </h3>
          <p className='text-body font-merchant-thin sm:w-[80%] lg:mx-auto 2xl:w-1/2'>
            The quick brown fox jumps over the lazy dog near the bank of the
            river the quick brown fox jumps over the lazy dog near the bank of
            the river.
          </p>
        </div>
        <Image
          priority
          src='/images/gradients/gradientYellowRed.png'
          alt='Gradient Yellow'
          height={800}
          width={800}
          className='pointer-events-none absolute top-1/2 -right-60 z-[-1] sm:-right-96 md:-right-[30rem] lg:-right-[36rem]'
        />
      </div>
    </section>
  );
};
