import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='relative m-auto grid h-[60vh] place-items-center md:h-screen'>
      <h1 className='text-mainTitle z-10 flex translate-y-24 flex-col gap-1 md:gap-2'>
        <p className='h1-anim'>Powered by Intellect,</p>
        <br />
        <p className='h1-anim'>Driven by Values</p>
      </h1>
      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none object-contain object-top opacity-75 xl:-translate-y-96'
      />
      <div>
        <Image
          priority
          src='/images/gradients/gradientMain.png'
          alt='Google Color Gradients'
          fill
          className='pointer-events-none object-contain object-bottom'
        />
        <Image
          priority
          src='/images/elements/gdscLines.png'
          alt='Google Color Lines'
          fill
          className='pointer-events-none z-[-1] translate-y-56 object-contain object-bottom px-8 md:translate-y-[27rem] lg:translate-y-[30rem]'
        />
        <Image
          priority
          src='/images/elements/gdscLogoGlass.png'
          alt='GDSC Logo Glass'
          height={500}
          width={1200}
          className='pointer-events-none absolute bottom-0 -right-4 translate-y-1/2 scale-90'
        />
        <Image
          priority
          src='/images/elements/arrowDown.png'
          alt='Arrow Down'
          height={300}
          width={300}
          className='pointer-events-none absolute -left-[5.5rem] bottom-28 translate-y-1/2 scale-[0.3] mix-blend-overlay sm:bottom-40 sm:-left-12 sm:scale-[0.5] md:bottom-48 xl:left-0 xl:scale-[0.7] 2xl:left-32 2xl:scale-[.80]'
        />
      </div>
    </section>
  );
};
