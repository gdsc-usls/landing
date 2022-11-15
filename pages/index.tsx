import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid h-screen place-items-center'>
      <h1 className='z-10 -translate-y-12  whitespace-nowrap text-center font-merchant-expanded text-8xl text-white'>
        Powered by Intellect, <br /> Driven by Values
      </h1>
      <Image
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none -translate-y-96 object-contain object-top opacity-75'
      />
      <Image
        src='/images/gradients/gradientMain.png'
        alt='Google Color Gradients'
        fill
        className='pointer-events-none object-contain object-bottom'
      />
      <Image
        src='/images/elements/gdscLines.png'
        alt='Google Color Lines'
        fill
        className='pointer-events-none z-[-1] translate-y-[30rem] object-contain object-bottom'
      />
      <Image
        src='/images/elements/gdscLogoGlass.png'
        alt='GDSC Logo Glass'
        height={500}
        width={1200}
        className='pointer-events-none absolute bottom-0 -right-4 translate-y-1/2 scale-90'
      />
      <Image
        src='/images/elements/arrowDown.png'
        alt='Arrow Down'
        height={300}
        width={300}
        className='pointer-events-none absolute left-32 bottom-48 translate-y-1/2 scale-[.80] mix-blend-overlay'
      />
    </div>
  );
}
