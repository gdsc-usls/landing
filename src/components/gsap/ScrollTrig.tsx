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
    stag?: number,
    start?: string
  ) {
    gsap.fromTo(
      target,
      {
        y: 250,
      },
      {
        scrollTrigger: {
          // markers: true,
          start: start || 'top bottom',
          trigger: trigger as string,
          toggleActions: 'restart none none reset',
        },
        y: 0,
        duration: 1.5,
        stagger: stag,
        ease: 'power4.out',
      }
    );
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
        target: '#about-gdsc-title h2, #about-gdsc-title p',
        stag: 0.3,
      },
      {
        trigger: '#usls-title',
        target: '#usls-title p',
        stag: 0.3,
      },
      {
        trigger: '#gdsc-usls-title',
        target: '#gdsc-usls-title h3, #gdsc-usls-title p',
        stag: 0.3,
      },
      {
        trigger: '#events li',
        start: '-150px bottom',
        stag: 0.3,
      },
    ];

    textsTarget.forEach(({ trigger, target, stag, start }) => {
      scrollTrigText(trigger, target || trigger, stag, start);
    });
  }, []);

  return <div>{children}</div>;
};

export default HandScrollAnimation;
