import React from 'react';
import Image from 'next/image';

import gridsDotted from 'public/images/elements/gridsDotted.png';
import gradientMain from 'public/images/gradients/gradientMain.png';
import gdscLines from 'public/images/elements/gdscLines.png';
import gdscLogoGlass from 'public/images/elements/gdscLogoGlass.png';
import arrowDown from 'public/images/elements/arrowDown.png';

export default function Home() {
  return (
    <div className='grid h-screen place-items-center'>
      <h1 className='z-10 -translate-y-12  whitespace-nowrap text-center font-merchant-expanded text-8xl text-white'>
        Powered by Intellect, <br /> Driven by Values
      </h1>
      <Image
        src={gridsDotted}
        alt='Dotted Grids'
        fill
        className='pointer-events-none -translate-y-96 object-contain object-top opacity-60'
      />
      <Image
        src={gradientMain}
        alt='Google Color Gradients'
        fill
        className='pointer-events-none object-contain object-bottom'
      />
      <Image
        src={gdscLines}
        alt='Google Color Lines'
        fill
        className='pointer-events-none z-[-1] translate-y-[30rem] object-contain object-bottom'
      />
      <Image
        src={gdscLogoGlass}
        alt='GDSC Logo Glass'
        className='pointer-events-none absolute bottom-0 -right-4 translate-y-1/2 scale-90'
      />
      <Image
        src={arrowDown}
        alt='GDSC Logo Glass'
        className='pointer-events-none absolute left-32 bottom-48 translate-y-1/2 scale-[.80] mix-blend-overlay'
      />
    </div>
  );
}
