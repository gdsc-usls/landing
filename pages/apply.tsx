import React from 'react';
import { gsap } from 'gsap';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';

export default function Apply() {
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
    <section className='mx-auto max-w-sm pt-40 font-googleSans-regular text-white'>
      <h1 className='font-merchant-thin-condensed text-4xl'>Join GDSC—USLS!</h1>

      <form className='mt-12 flex flex-col gap-y-4'>
        <Input label='First Name' type='text' maxLength={100} />
        <Input label='Last Name' type='text' maxLength={100} />
        <Input label='Student ID' type='text' maxLength={7} />

        <div className='flex gap-x-2 text-sm text-gray-400'>
          <input type='checkbox' />
          <p>All of the information I provided is true and correct.</p>
        </div>

        <button type='button' className='rounded bg-white py-2 text-black'>
          Become a Member
        </button>
      </form>
    </section>
  );
}

const Input = ({
  label,
  ...rest
}: { label: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => (
  <div className='mb-4 flex flex-col'>
    <label
      className='flex w-full items-center border-b-[1px] border-b-gray-500 uppercase'
      htmlFor={label}
    >
      <p className='w-[120px]'>{label}</p>
      <input
        className='focus:shadow-outline w-full appearance-none rounded border border-none bg-transparent py-2 px-3 leading-tight text-gray-400 shadow focus:outline-none'
        required
        id={label}
        {...rest}
      />
    </label>
  </div>
);
