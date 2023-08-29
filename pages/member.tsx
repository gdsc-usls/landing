import React, { FormEventHandler, useState } from 'react';
import { gsap } from 'gsap';
import { toast } from 'sonner';
import Tilt from 'react-parallax-tilt';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import { db } from '~/config/firebase';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';

type Member = {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: any;
};

export default function Apply() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

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

    setLoading(true);

    const payload: Omit<Member, 'id'> = {
      firstName,
      lastName,
      createdAt: serverTimestamp(),
    };

    try {
      const user = await getDoc(doc(db, 'membership', studentId));
      if (user.exists()) {
        toast.error('You are already a member.');
        setLoading(false);
        return;
      }
    } catch (err: any) {
      toast.error(err.message);
    }

    try {
      await setDoc(doc(db, 'membership', studentId), payload);
    } catch (err: any) {
      toast.error(err.message);
    }

    toast.success('You are now a member!');
    setLoading(false);
    setIsComplete(true);
  };

  return (
    <section className='px-6'>
      {isComplete ? (
        <Badge firstName={firstName} lastName={lastName} />
      ) : (
        <div className='mx-auto min-h-screen max-w-sm pt-40 font-googleSans-regular text-white'>
          <h1 className='font-merchant-thin-condensed text-4xl'>
            Join GDSC—USLS!
          </h1>

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
              minLength={7}
              maxLength={7}
            />

            <div className='flex gap-x-2 text-sm text-gray-400'>
              <input required type='checkbox' />
              <p>All of the information I provided is true and correct.</p>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='h-[45px] rounded bg-white text-black'
            >
              {loading ? <span className='loader' /> : <p>Become a Member</p>}
            </button>
          </form>
        </div>
      )}
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

const Badge = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return (
    <div className='pt-52'>
      <Tilt gyroscope className='mx-auto max-w-[400px]'>
        <div className='relative grid w-full place-items-center'>
          <div className='absolute mb-24 ml-16 w-[300px] font-googleSans-medium text-4xl text-gray-700'>
            <p className='text-primary-100'>{firstName}</p>
            <p className='text-primary-100'>{lastName}</p>
          </div>
          <img
            className='pointer-events-none h-full w-full rounded object-contain'
            src='/images/apply/badge.png'
            alt='Appreciation Certificate'
          />
        </div>
      </Tilt>
    </div>
  );
};
