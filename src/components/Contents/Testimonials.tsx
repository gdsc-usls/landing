import React from 'react';
import Image from 'next/image';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Gian Aibo Boyero',
      role: 'GDSC USLS Lead',
      message:
        "GDSC-USLS is an extraordinary community of talented and dedicated individuals who constantly strive to learn, grow and achieve their goals. I am so grateful to be a part of this community, and I know that I'm learning, growing every day, and had limitless opportunities because of what they have established.",
    },
    {
      name: 'Jiyun Bae',
      role: 'GDSC SWU Lead',
      message:
        'It was a pleasure to work with GDSC-USLS. Gian has a wonderful team of kind and helpful people, and the positive energy that comes from this team is worth some praise. It is an honour to have worked with such a team.',
    },
    {
      name: 'Joseph Dale Bañares',
      role: 'Software Engineer',
      message:
        'GDSC has provided me with invaluable experiences, opportunities, and connections, and has allowed me to grow both technically and socially within a supportive community of passionate learners.',
    },
    {
      name: 'Leigh Andrew Eslawa',
      role: 'Graphic Designer',
      message:
        'Working for GDSC has been like embarking on a grand literary adventure, with each chapter bringing new lessons, experiences, and new insights that will undoubtedly shape my future.',
    },
    {
      name: 'Josh Daniel Bañares',
      role: 'Software Engineer',
      message:
        'GDSC has been a catalyst for my personal growth. It has enabled me to connect with exceptional individuals, learn critical skills, and grow as a person.',
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
