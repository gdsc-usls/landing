import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
      name: 'CSS',
      logo: '/images/icons/css-logo.svg',
    },
    {
      name: 'ITS',
      logo: '/images/icons/its-logo.svg',
    },
    {
      name: 'USG',
      logo: '/images/icons/usg-logo.svg',
    },
  ];

  const partnersGDSC = ['Philippines', 'USTP', 'DLSU'];

  const router = useRouter();

  return (
    <section className='contain relative flex min-h-[70vh] flex-col items-center justify-center xl:min-h-screen'>
      <p
        id='partners-title'
        className='contain text-center font-merchant-thin-condensed text-white [fontSize:clamp(1.3rem,4vw,3rem)]'
      >
        Built with trusted community partners
      </p>

      <div>
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
        <div className='my-10 flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:my-20'>
          <div>
            <Image
              src='/images/icons/gdsc-logo.svg'
              alt='gdsc-logo'
              height={80}
              width={80}
              className='logo mx-auto scale-[0.6] sm:scale-75 md:scale-100'
            />
            <p className='mt-2 text-center font-googleSans-medium font-medium text-white'>
              Google Developer Group
            </p>
            <p className='max-w-xs text-center font-googleSans-regular text-white'>
              Bacolod
            </p>
          </div>
          {partnersGDSC.map((partner) => (
            <div className='' key={partner}>
              <Image
                src='/images/icons/gdsc-logo.svg'
                alt='gdsc-logo'
                height={80}
                width={80}
                className='logo mx-auto scale-[0.6] sm:scale-75 md:scale-100'
              />
              <p className='mt-2 text-center font-googleSans-medium font-medium text-white'>
                Google Developer Student Clubs
              </p>
              <p className='max-w-xs text-center font-googleSans-regular text-white'>
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        type='button'
        className='text-body hover-effect border-b-[1px] text-white'
        onClick={() => router.push('/partners')}
      >
        see more
      </button>
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
