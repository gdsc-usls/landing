import React from 'react';
import Image from 'next/image';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Name Name',
      role: 'UI/UX Designer',
      message:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    },
    {
      name: 'Joseph Dale Bañares',
      role: 'Software Enginer',
      message:
        'GDSC has provided me with a space to hone my technical and social skills, explore new technologies, build lasting connections with like-minded individuals, and pursue my passions alongside a diverse community.',
    },
    {
      name: 'Name Name',
      role: 'Software Developer',
      message:
        'uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parat non proident, sunt in culpa qui officia deserunt mollit anim id.',
    },
    {
      name: 'Name Name',
      role: 'Software Engineer',
      message:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la',
    },
    {
      name: 'Name Name',
      role: 'Data Scientist',
      message:
        'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation scing elit, sed do eiusmod tempor incididunt ut labore et ',
    },
  ];

  return (
    <section className='contain relative mb-20 pt-20  text-white  md:mb-0 xl:mb-56'>
      <div id='testimonials-title' className='mb-20'>
        <h3 className='text-title xl:mb-10'>The GDSC Experience</h3>
        <div className='grid-cols-2 border-t-[1px] border-t-white pt-7 xl:grid xl:pt-10'>
          <p className='text-body mb-3 uppercase xl:mb-0'>About Us</p>
          <p className='text-body'>
            GDSC is a community of passionate learners who are dedicated to
            explore the endless possibilities of technology through interactive
            workshops, engaging initiatives, and camaraderie, with a focus on
            individual and communal growth. Hear from our members about how we
            hone technical skills, invigorate the passion for development, and
            instill integral values.
          </p>
        </div>
        <Image
          id='arrow-down-1'
          priority
          src='/images/elements/arrowDown.png'
          alt='Arrow Down'
          height={300}
          width={300}
          className='pointer-events-none scale-[0.5] opacity-20 xl:scale-[0.7] 2xl:scale-[.80]'
        />
      </div>

      <div className='relative flex gap-6 sm:gap-10 md:gap-20 lg:gap-28 2xl:gap-60'>
        <div className='flex gap-5 self-stretch sm:gap-8 md:gap-10 lg:gap-14 2xl:gap-20 [&>*]:border-r-[1px] [&>*:after]:content-[""]'>
          <span className='border-r-blue-800' />
          <span className='border-r-green-800' />
          <span className='border-r-red-800' />
          <span className='border-r-yellow-800' />
        </div>

        <div className='grid grid-cols-1 gap-40 md:gap-52 md:border-x-[1px] md:border-x-gray-500 md:px-12 lg:gap-60 xl:grid-cols-2 xl:gap-0 xl:border-x-0'>
          <div className='testimony xl:pb-96'>
            {testimonials.map((testimonial, i) => {
              return (
                (i + 1) % 2 !== 0 && (
                  <Message
                    idName={`testimony-${i}`}
                    key={testimonial.name}
                    {...testimonial}
                  />
                )
              );
            })}
          </div>

          <div className='testimony justify-center xl:pb-96'>
            {testimonials.map((testimonial, i) => {
              return (
                (i + 1) % 2 === 0 && (
                  <Message
                    idName={`testimony-${i}`}
                    key={testimonial.name}
                    {...testimonial}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
      <Image
        priority
        src='/images/gradients/gradientBlueGreen.png'
        alt='Gradient Blue'
        height={900}
        width={900}
        className='pointer-events-none invisible absolute -right-20 top-72 scale-y-75 lg:right-0 lg:scale-y-100 xl:visible'
      />
    </section>
  );
};

interface MessageProps {
  name: string;
  role: string;
  message: string;
  idName: string;
}

const Message = ({ name, role, message, idName }: MessageProps) => {
  return (
    <div id={idName}>
      <div className='mb-3 flex gap-4'>
        <div className='font-montserrat'>
          <p className='text-sm font-medium md:text-base'>{name}</p>
          <p className='text-sm font-light text-gray-300 md:text-base'>
            {role}
          </p>
        </div>
      </div>
      <p className='text-body'>
        <q>{message}</q>
      </p>
    </div>
  );
};
