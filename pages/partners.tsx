import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';

const Partners = () => {
  useLayoutEffect(() => {
    gsap.to('body', {
      overflowY: 'scroll',
    });

    gsap.to('.menu-burger, .logo', {
      duration: 0.5,
      opacity: 1,
      stagger: 0.2,
    });
  }, []);

  const partnersGDSC = [
    'De La Salle University',
    'University of Science and Technology of Southern Philippines',
    'Tohoku University',
    "Seoul Women's University",
    'Binus University Malang',
    'Southville International School and Colleges',
    'Waseda University',
    'K.J. Somaiya Institute of Engineering and Information Technology ',
    'Holy Angel University',
    'Guru Nanak Dev University',
    'PUP Sto. Tomas Branch',
    'University of Negros Occidental - Recoletos',
    'Central Philippine University',
    'University of Energy and Natural Resources Ghana',
    'Universitas Sumatera Utara',
    'Benguet State University',
    'University of the Immaculate Conception',
    'NU Baliwag',
    'De La Salle-College of Saint Benilde',
    'Cristal e-College',
    'Saitama University',
    'Sookmyong University',
    'Western State Mindanao University',
    'National Chengchi University',
    'Chungang University',
    'George Washington University',
    'Mukesh Patel School of Technology Management and Engineering',
  ];

  const router = useRouter();

  return (
    <section className='contain relative z-20 flex min-h-[70vh] flex-col items-center justify-center pt-44 pb-36 xl:mb-96 xl:min-h-screen xl:pb-96'>
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

      <button
        type='button'
        className='text-body hover-effect border-b-[1px] text-white'
        onClick={() => router.push('/')}
      >
        back home
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

export default Partners;
