import React from 'react';
import Image from 'next/image';

export const Partners = () => {
  const partners = [
    {
      name: 'GDSC USLS',
      logo: '/images/icons/gdsc-logo.svg',
    },
    {
      name: 'GDSC USLS',
      logo: '/images/icons/gdsc-logo.svg',
    },
    {
      name: 'GDSC USLS',
      logo: '/images/icons/gdsc-logo.svg',
    },
  ];

  return (
    <div className='my-52'>
      <p className='px-10 text-center font-merchant-thin-condensed text-white [fontSize:clamp(1.3rem,4vw,3rem)] md:px-20 lg:px-32'>
        A community built with trusted companies and partners
      </p>

      <div className='mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:mt-20'>
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            height={80}
            width={80}
            className='scale-75 md:scale-100'
          />
        ))}
      </div>
    </div>
  );
};
