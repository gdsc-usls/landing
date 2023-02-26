import React from 'react';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section className='contain relative flex h-screen flex-col items-end text-white'>
      <Image
        priority
        src='/images/elements/swirlGlass.png'
        alt='Swirl Glass'
        height={800}
        width={600}
        className='pointer-events-none absolute -top-3/4 rotate-12 -scale-x-100 md:rotate-0'
      />
      <Image
        priority
        src='/images/gradients/gradientRedYellow.png'
        alt='Gradient Red'
        height={1000}
        width={1000}
        className='pointer-events-none absolute -top-96 left-0 z-[-1] mr-40 scale-x-[-1]'
      />
      <div className='w-[60%]'>
        <h3 className='mb-20 font-merchant-expanded text-6xl'>
          Ready to uplift lorem ipsum the qick brwn fox?
        </h3>
        <form className=' font-montserrat' action='mailto: gdsc@usls.edu.ph'>
          <div className='mb-4 flex gap-4'>
            <label
              className='flex w-full items-center border-b-[1px] border-b-gray-500 text-sm uppercase'
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
              className='flex w-full items-center border-b-[1px] border-b-gray-500 text-sm uppercase'
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
            <label className='text-sm uppercase' htmlFor='message'>
              Message:
              <div className='relative'>
                <textarea
                  className='h-56 w-full resize-none appearance-none bg-transparent text-gray-400'
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
