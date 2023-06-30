import React from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';

export const Partners = () => {
  const partners = [
    {
      name: 'Umamin',
      logo: '/images/icons/umamin-logo.svg',
    },
    {
      name: 'Zuitt',
      logo: '/images/icons/zuitt-logo.svg',
    },
    {
      name: 'GDSC USLS',
      logo: '/images/icons/gdsc-logo.svg',
    },
  ];

  // const router = useRouter();

  return (
    <section className='relative flex min-h-[70vh] flex-col items-center justify-center xl:h-screen'>
      <p
        id='partners-title'
        className='contain text-center font-merchant-thin-condensed text-white [fontSize:clamp(1.3rem,4vw,3rem)]'
      >
        Built with trusted community partners
      </p>

      <div
        id='partners-logos'
        className='my-10 flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:my-20'
      >
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            height={80}
            width={80}
            className='scale-[0.6] sm:scale-75 md:scale-100'
          />
        ))}
      </div>

      {/* <button
        type='button'
        className='text-body hover-effect text-white'
        onClick={() => router.push('/partners')}
      >
        See more
      </button> */}
      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none z-[-2] object-contain opacity-80'
      />
    </section>
  );
};
