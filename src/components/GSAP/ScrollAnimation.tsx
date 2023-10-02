import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';

export const ScrollAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
        opacity: 0,
      },
      {
        scrollTrigger: {
          markers: process.env.NODE_ENV === 'development',
          start: start || 'top bottom',
          trigger: trigger as string,
          toggleActions: 'restart none none reset',
        },
        opacity: 1,
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
          trigger: '#home',
          start: 'bottom bottom',
          scrub: 0.7,
        },
        y: -60,
      });

    gsap.to('#arrow-down-1', {
      scrollTrigger: {
        trigger: '#testimonials-title',
        start: 'bottom bottom',
        scrub: 0.7,
      },
      y: -70,
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
        trigger: '#events',
        target: '#events li',
        start: '-110px bottom',
        stag: 0.3,
      },
      {
        trigger: '#partners-title',
        target: '#partners-title, #partners-logos .logo',
        start: '-230px bottom',
        stag: 0.1,
      },
      {
        trigger: '#testimonials-title',
        target: '#testimonials-title h3, #testimonials-title p ',
        start: '20px bottom',
        stag: 0.1,
      },
      {
        trigger: '#contact-title',
        target: '#contact-title, #contact-form ',
        start: '20px bottom',
        stag: 0.1,
      },
    ];

    // Looping through testimonials for individual scroll trigs
    for (let i = 0; i < 5; i++) {
      textsTarget.push({
        trigger: `#testimony-${i}`,
        target: `#testimony-${i} p`,
        stag: 0.1,
      });
    }

    textsTarget.forEach(({ trigger, target, stag, start }) => {
      scrollTrigText(trigger, target || trigger, stag, start);
    });
  }, []);

  return <div>{children}</div>;
};
