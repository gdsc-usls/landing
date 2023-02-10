import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useLayoutEffect from '../hooks/use-isomorphic-layout-effect';

const HandScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  gsap.registerPlugin(ScrollTrigger);

  // Fn for creating a new scrollTrigger instance
  // function scrollTrig(trigger: string, start: string, scrub: number | boolean) {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger,
  //       start,
  //       scrub,
  //       // markers: true,
  //     },
  //   });

  //   return tl;
  // }

  // Responsible for onScroll (intersection) animation
  function scrollTrigText(
    trigger: string,
    target: string,
    start?: string,
    stag?: number
  ) {
    gsap.to(target, {
      scrollTrigger: {
        trigger: trigger as string,
        start: start || 'center 75%',
        // markers: true,
      },
      opacity: 1,
      duration: 0.8,
      stagger: stag,
    });
  }

  useLayoutEffect(() => {
    gsap
      // .to('#gdsc-glass-logo', {
      //   y: -0.1,
      // })
      .to('#arrow-down', {
        scrollTrigger: {
          trigger: '#hero-section',
          start: 'bottom bottom',
          scrub: 0.7,
        },
        y: -60,
      });

    // Responsible for onScroll (intersection) animation
    const textsTarget = [
      {
        trigger: '#about-gdsc-title',
      },
      {
        trigger: '#about-gdsc-paragraph',
      },
      {
        trigger: '#usls-title-contain',
        target: '#usls-title',
        start: 'top 75%',
      },
      {
        trigger: '#usls-title',
        target: '#usls-title p',
        start: 'top 75%',
        stag: 0.3,
      },
      {
        trigger: '#gdsc-usls-title',
        target: '#gdsc-usls-title h3, #gdsc-usls-title p',
        stag: 0.3,
      },
      {
        trigger: '#events li',
        stag: 0.4,
      },
    ];

    textsTarget.forEach(({ trigger, target, start, stag }) => {
      scrollTrigText(trigger, target || trigger, start, stag);
    });
  }, []);

  return <div>{children}</div>;
};

export default HandScrollAnimation;
