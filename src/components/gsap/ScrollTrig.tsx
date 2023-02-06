import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useLayoutEffect from '../hooks/use-isomorphic-layout-effect';

const HandScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  gsap.registerPlugin(ScrollTrigger);

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

  useLayoutEffect(() => {
    /**
     * TL1
     */

    const tl = scrollTrig('#about-gdsc-title', 'center 75%', false);
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

    tl.to('#about-gdsc-title', {
      opacity: 1,
      duration: 0.8,
    }).to(
      '#about-gdsc-paragraph',
      {
        opacity: 1,
        duration: 0.8,
      },
      '<25%'
    );
  }, []);

  return <div>{children}</div>;
};

export default HandScrollAnimation;
