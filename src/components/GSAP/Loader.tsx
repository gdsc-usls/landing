import React from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';
import { useGlobal } from '~/contexts/GlobalContext';

export const Loader = () => {
  const { unmountLoader, handleUnmountLoader } = useGlobal();

  useLayoutEffect(() => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1.5,
      ease: 'power3.inOut',
    });

    if (!unmountLoader) {
      tl.to('.text-load p', {
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
          '#gdsc-logo, .text-load p',
          {
            duration: 1,
            opacity: 0,
          },
          '+=0.7'
        )
        .to(
          '.gdsc-color.bg-black',
          {
            duration: 0.5,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power2.easeInOut',
          },
          '-=50%'
        )
        .to(
          '.gdsc-color.bg-yellow-600',
          {
            duration: 0.5,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power2.easeInOut',
          },
          '-=60%'
        )
        .to(
          '.gdsc-color.bg-green-700',
          {
            duration: 0.5,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power2.easeInOut',
          },
          '-=70%'
        )
        .to(
          '.gdsc-color.bg-blue-700',
          {
            duration: 0.6,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power2.easeInOut',
          },
          '-=80%'
        )
        .to(
          '.gdsc-color.bg-red-700',
          {
            duration: 0.4,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power2.easeInOut',
          },
          '-=90%'
        )
        .to('#loader-bg', {
          duration: 0.8,
          opacity: 0,
          onComplete: () => handleUnmountLoader(),
        })
        .to(
          '.menu-burger, .logo',
          {
            duration: 0.5,
            opacity: 1,
            stagger: 0.2,
          },
          '-=0.8'
        )
        .fromTo(
          '.h1-anim',
          {
            y: 20,
          },
          {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            duration: 0.8,
            stagger: 0.3,
            y: 0,
          },
          '-=40%'
        )
        .to(
          '#arrow-down, #gdsc-glass-logo',
          {
            duration: 0.5,
            opacity: 1,
            stagger: -0.3,
          },
          '-=0.5'
        )
        .to(
          'body',
          {
            overflowY: 'auto',
          },
          '>'
        );
    } else {
      tl.fromTo(
        '.h1-anim',
        {
          y: 20,
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          duration: 0.6,
          stagger: 0.3,
          y: 0,
        },
        '-0.7'
      )
        .to(
          '#arrow-down, #gdsc-glass-logo',
          {
            duration: 0.5,
            opacity: 1,
            stagger: -0.3,
          },
          '-=0.5'
        )
        .to(
          'body',
          {
            overflowY: 'auto',
          },
          '>'
        );
    }
  }, [handleUnmountLoader, unmountLoader]);

  const divColors = [
    'bg-red-700',
    'bg-blue-700',
    'bg-green-700',
    'bg-yellow-600',
    'bg-black',
  ];

  return (
    <>
      (
      {!unmountLoader && (
        <>
          <div
            id='loader-bg'
            className='fixed top-0 left-0 z-50 grid h-screen w-screen place-items-center '
          >
            <div>
              <Image
                priority
                src='/images/icons/gdsc-logo.svg'
                alt='GDSC Logo'
                height={100}
                width={100}
                className='z-10 mx-auto mb-5 scale-75 opacity-0 md:scale-100'
                id='gdsc-logo'
              />
              <div className='text-load z-10 flex gap-4 font-montserrat text-lg text-white [&>p]:opacity-0'>
                <p>Connect,</p>
                <p>Learn,</p>
                <p>Grow</p>
              </div>
            </div>
          </div>
          {divColors.map((color) => (
            <div
              key={color}
              className={`${color} gdsc-color absolute top-0  left-0 z-[9] h-screen w-screen [clipPath:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)]`}
            />
          ))}
        </>
      )}
      )
    </>
  );
};
