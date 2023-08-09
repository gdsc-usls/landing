import React, { FormEventHandler } from 'react';
import { gsap } from 'gsap';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '~/config/firebase';
import { toast } from 'sonner';

type Member = {
  id: string;
  firstName: string;
  lastName: string;
};

export default function Apply() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [studentId, setStudentId] = React.useState('');

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

  const handleAdd: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      const payload: Omit<Member, 'id'> = {
        firstName,
        lastName,
      };

      await setDoc(doc(db, 'membership', studentId), payload);
      toast.success('You are now a member!');

      setTimeout(() => {
        setStudentId('');
        setFirstName('');
        setLastName('');
      }, 500);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <section className='mx-auto max-w-sm pt-40 font-googleSans-regular text-white'>
      <h1 className='font-merchant-thin-condensed text-4xl'>Join GDSC—USLS!</h1>

      <form onSubmit={handleAdd} className='mt-12 flex flex-col gap-y-4'>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label='First Name'
          type='text'
          maxLength={100}
        />
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          label='Last Name'
          type='text'
          maxLength={100}
        />
        <Input
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          label='Student ID'
          type='text'
          maxLength={7}
        />

        <div className='flex gap-x-2 text-sm text-gray-400'>
          <input required type='checkbox' />
          <p>All of the information I provided is true and correct.</p>
        </div>

        <button type='submit' className='rounded bg-white py-2 text-black'>
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
