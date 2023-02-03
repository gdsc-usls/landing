import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react';
import useLayoutEffect from '../hooks/use-isomorphic-layout-effect';

export const Loader = () => {
  const [unmount, setUnmount] = useState(false);

  const loaderTl = () => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1.5,
      ease: 'power3.inOut',
    });

    tl.to(
      '.loader-down',
      {
        duration: 1,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      },
      '<'
    );
  };

  const loaderTlTrail = () => {
    const tl: GSAPTimeline = gsap.timeline({
      delay: 1.5,
      ease: 'power3.inOut',
    });

    tl.to(
      '.loader-down-gold',
      {
        duration: 1,
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      },
      '<'
    ).to(
      'body',
      {
        overflowY: 'auto',
        onComplete: () => setUnmount(true),
      },
      '-=0.3'
    );
  };

  useLayoutEffect(() => {
    gsap.timeline().add(loaderTl).add(loaderTlTrail, '>0.2');
  }, []);

  // scroll to top before page reload
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as any,
      });
    }, 0);
  }, []);

  return (
    <>
      (
      {!unmount && (
        <>
          <div className='loader-down fixed top-0 left-0 z-[42] h-full w-full bg-[#1e1e1e] [clipPath:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)]' />
          <div className='loader-down-gold fixed top-0 left-0 z-[41] h-full w-full bg-yellow-600 [clipPath:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)]' />
        </>
      )}
      )
    </>
  );
};
