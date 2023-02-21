import React from 'react';
import Image from 'next/image';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ashley Ko',
      role: 'UI/UX Designer',
      message:
        'GDSC became the playground that helped me furhter my tech skills and meet amazing people, while also ampluifying our own individualities.',
    },
    {
      name: 'Renzo Tan',
      role: 'Software Enginer',
      message:
        'Not only did GDSC help develop my technical skills, but also allowed me to expand and hone my interpersonal skills as well.',
    },
    {
      name: 'Emman Evangelista',
      role: 'Software Developer',
      message:
        'I am proud to say that I have learned a lot of new stuff BUT I know that there is still so much more to explore and learn in the world of technology!',
    },
    {
      name: 'Gio Divino',
      role: 'Software Engineer',
      message:
        'I was able to hone my technical skills and build meaningful relationships with this inclusive community.',
    },
    {
      name: 'Franz Taborlupa',
      role: 'Data Scientist',
      message:
        'GDSC helped me become the leader I am today and carved the path for me towards data science.',
    },
  ];

  return (
    <section className='contain relative mb-32 pt-20 text-white md:mb-52'>
      <div id='testimonials-title' className='mb-20'>
        <h3 className='text-title w-[80%] xl:mb-10 2xl:w-[60%]'>
          See what lorempsu sit testimonials
        </h3>
        <div className='grid-cols-2 border-t-[1px] border-t-white pt-7 xl:grid xl:pt-10'>
          <p className='text-body mb-3 uppercase xl:mb-0'>About Us</p>
          <p className='text-body'>
            The quick brown fox jumps over the lazy dog near the bank of the
            river Reference site about Lorem Ipsum, giving information on its
            origins, as well as a random Lipsum generator.
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
          <div className='testimony'>
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

          <div className='testimony justify-center'>
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
