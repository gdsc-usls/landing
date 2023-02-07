import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useLayoutEffect from '../hooks/use-isomorphic-layout-effect';

const HandScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  gsap.registerPlugin(ScrollTrigger);

  // Fn for creating a new scrollTrigger instance
  function scrollTrig(trigger: string, start: string, scrub: number | boolean) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        scrub,
        // markers: true,
      },
    });

    return tl;
  }

  // Responsible for onScroll (intersection) animation
  function scrollTrigText(trigger: string, target: string, start?: string) {
    gsap.to(target, {
      scrollTrigger: {
        trigger: trigger as string,
        start: start || 'center 75%',
        // markers: true,
      },
      opacity: 1,
      duration: 0.8,
    });
  }

  useLayoutEffect(() => {
    const heroTl = scrollTrig('#hero-section', 'bottom bottom', 0.7);

    heroTl
      .to('#gdsc-glass-logo', {
        scale: 0.8,
      })
      .to(
        '#arrow-down',
        {
          y: -60,
        },
        '<'
      );

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
        trigger: '#usls-title-contain',
        target: '#usls-title-p',
        start: 'top 75%',
      },
      {
        trigger: '#gdsc-usls-title',
      },
      {
        trigger: '#gdsc-usls-title-p',
      },
    ];

    textsTarget.forEach((text) => {
      scrollTrigText(
        text.trigger,
        text.target ? text.target : text.trigger,
        text.start
      );
    });
  }, []);

  return <div>{children}</div>;
};

export default HandScrollAnimation;
