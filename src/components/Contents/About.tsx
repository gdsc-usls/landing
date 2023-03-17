import React from 'react';
import Image from 'next/image';

export const About = () => {
  return (
    <div
      id='about'
      className='contain relative mb-48 pt-48 text-white sm:pt-56 md:mb-80 md:pt-96 lg:mb-96 xl:pt-[26rem]'
    >
      <Image
        priority
        src='/images/gradients/gradientMain.png'
        alt='Google Color Gradients'
        fill
        className='pointer-events-none z-[-1] scale-y-[-1] object-contain object-bottom'
      />
      <Image
        priority
        src='/images/gradients/gradientGreenBlue.png'
        alt='Gradient Green'
        height={1000}
        width={1000}
        className='pointer-events-none absolute top-[35%] left-0 z-[-1] mr-40 scale-x-[-1]'
      />
      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none z-[-2] translate-y-1/3 object-contain object-top opacity-80'
      />
      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none z-[-2] translate-y-[80%] object-contain object-top opacity-80'
      />
      <div id='about-gdsc-title' className='mx-auto mb-40 xl:w-3/4'>
        <h2 className='text-title mr-auto mb-5 whitespace-nowrap sm:mb-10'>
          Google Developer <br /> Student Clubs —
        </h2>
        <p className='text-body ml-auto w-full text-right font-merchant-thin sm:w-[80%] md:leading-8 lg:w-[65%]'>
          Gathering like-minded, inquisitive youths who are eager to learn and
          deepen their knowledge of the world with the help of Google Technology
          to solve real world problems.
        </p>
      </div>
      <div className='flex flex-col-reverse gap-20  lg:flex-row lg:justify-between'>
        <Image
          priority
          src='/images/elements/swirlGlass.png'
          alt='Swirl Glass'
          height={800}
          width={600}
          className='pointer-events-none -translate-y-20 rotate-12 md:rotate-0 xl:translate-x-40'
        />
        <div id='usls-title' className='ml-auto flex flex-col text-right'>
          <p className='font-merchant-semibold leading-[0.7] [fontSize:clamp(5rem,15vw,10rem)]'>
            USLS
          </p>
          <p className='text-right font-montserrat uppercase [fontSize:clamp(0.6rem,1.5vw,1rem)]'>
            University of St. La Salle <br /> — Bacolod{' '}
          </p>
        </div>
      </div>
      <div>
        <div id='gdsc-usls-title' className='mx-auto text-white xl:w-3/4'>
          <h3 className='text-title mb-2 md:mb-5 lg:translate-x-6 2xl:-translate-x-20 2xl:text-center'>
            GDSC - USLS
          </h3>
          <p className='text-body font-merchant-thin sm:w-[80%] lg:mx-auto 2xl:w-1/2'>
            We foster innovation, compassion, and technical excellence. Our
            workshops, initiatives, and projects promote collaborative learning
            and Lasallian camaraderie. — Join us to enhance your tech skills and
            achieve your goals in an inclusive and supportive community.
          </p>
        </div>
      </div>
    </div>
  );
};
