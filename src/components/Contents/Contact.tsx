import React from 'react';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='contain relative flex flex-col items-end text-white'
    >
      <Image
        priority
        src='/images/elements/swirlGlass.png'
        alt='Swirl Glass'
        height={800}
        width={600}
        className='pointer-events-none -top-full rotate-0 -scale-x-100 md:rotate-0 lg:rotate-12 xl:absolute'
      />
      <Image
        priority
        src='/images/gradients/gradientRedYellow.png'
        alt='Gradient Red'
        height={1000}
        width={1000}
        className='pointer-events-none absolute top-0 left-0  z-[-1] mr-40 scale-x-[-1] lg:-top-96'
      />
      <div className='mt-10 w-full md:w-3/4 lg:mt-0 xl:w-[60%]'>
        <h3
          id='contact-title'
          className='mb-10 font-merchant-expanded leading-10 [fontSize:clamp(1.6rem,4vw,3.8rem)] sm:leading-tight md:mb-20 lg:mt-16'
        >
          Have a Question? <br /> Get in Touch!
        </h3>
        <form
          id='contact-form'
          className='font-montserrat'
          action='mailto: gdsc@usls.edu.ph'
        >
          <div className='mb-4 flex gap-4'>
            <label
              className='flex w-full items-center border-b-[1px] border-b-gray-500 text-xs uppercase md:text-sm'
              htmlFor='email'
            >
              email
              <input
                className='focus:shadow-outline w-full appearance-none rounded border border-none  bg-transparent py-2 px-3 leading-tight text-gray-400 shadow focus:outline-none'
                id='email'
                type='email'
                required
              />
            </label>

            <label
              className='flex w-full items-center border-b-[1px] border-b-gray-500 text-xs uppercase md:text-sm'
              htmlFor='subject'
            >
              subject
              <input
                className='focus:shadow-outline w-full appearance-none rounded border border-none bg-transparent py-2 px-3 leading-tight text-gray-400 shadow focus:outline-none'
                id='subject'
                type='text'
                required
              />
            </label>
          </div>
          <div className='border-b-[1px] border-b-gray-500'>
            <label className='text-xs uppercase md:text-sm' htmlFor='message'>
              Message:
              <div className='relative'>
                <textarea
                  className='h-36 w-full resize-none appearance-none bg-transparent text-gray-400 outline-none lg:h-56'
                  id='message'
                  required
                />
                <input
                  type='submit'
                  value='Send'
                  className='absolute bottom-2 right-0  cursor-pointer rounded-full bg-white px-3 py-5 text-xs font-bold text-black'
                />
              </div>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};
