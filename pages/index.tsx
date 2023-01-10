import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className='relative m-auto grid h-[60vh] place-items-center md:h-screen'>
        <h1 className='text-mainTitle z-10 translate-y-24'>
          Powered by Intellect, <br /> Driven by Values
        </h1>
        <Image
          src='/images/elements/gridsDotted.png'
          alt='Dotted Grids'
          fill
          className='pointer-events-none object-contain object-top opacity-75 xl:-translate-y-96'
        />
        <div>
          <Image
            src='/images/gradients/gradientMain.png'
            alt='Google Color Gradients'
            fill
            className='pointer-events-none object-contain object-bottom'
          />
          <Image
            src='/images/elements/gdscLines.png'
            alt='Google Color Lines'
            fill
            className='pointer-events-none z-[-1] translate-y-56 object-contain object-bottom px-8 md:translate-y-[27rem] lg:translate-y-[30rem]'
          />
          <Image
            src='/images/elements/gdscLogoGlass.png'
            alt='GDSC Logo Glass'
            height={500}
            width={1200}
            className='pointer-events-none absolute bottom-0 -right-4 translate-y-1/2 scale-90'
          />
          <Image
            src='/images/elements/arrowDown.png'
            alt='Arrow Down'
            height={300}
            width={300}
            className='pointer-events-none absolute -left-[5.5rem] bottom-28 translate-y-1/2 scale-[0.3] mix-blend-overlay sm:bottom-40 sm:-left-12 sm:scale-[0.5] md:bottom-48 xl:left-0 xl:scale-[0.7] 2xl:left-32 2xl:scale-[.80]'
          />
        </div>
      </section>
      {/*
       2nd Section 
       */}
      <section className='relative overflow-x-hidden overflow-y-clip py-48 px-10 text-white sm:py-56 md:px-20 md:py-96 lg:px-32 xl:py-[26rem]'>
        <Image
          src='/images/gradients/gradientGreenBlue.png'
          alt='Gradient Green'
          height={800}
          width={800}
          className='pointer-events-none absolute top-[30%] -left-72 z-[-1] sm:-left-96 md:-left-[30rem]'
        />
        <Image
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
            The quick brown fox jumps over the lazy dog near the bank of the
            river the quick brown fox jumps over the lazy dog near the bank of
            the river.
          </p>
        </div>
        <div className='flex flex-col-reverse gap-20  lg:flex-row lg:justify-between'>
          <Image
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
            src='/images/gradients/gradientYellowRed.png'
            alt='Gradient Yellow'
            height={800}
            width={800}
            className='pointer-events-none absolute top-1/2 -right-60 z-[-1] sm:-right-96 md:-right-[30rem] lg:-right-[36rem]'
          />
        </div>
      </section>
    </main>
  );
}
