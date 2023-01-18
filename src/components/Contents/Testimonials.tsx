import React from 'react';
import Image from 'next/image';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Gio Divino',
      role: 'Software Engineer',
      message:
        'I was able to hone my technical skills and build meaningful realtionships with this inclusive community.',
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
      name: 'Franz Taborlupa',
      role: 'Data Scientist',
      message:
        'GDSC helped me become the leader I am today and carved the path for me towards data science.',
    },
    {
      name: 'Ashley Ko',
      role: 'UI/UX Designer',
      message:
        'GDSC became the playground that helped me furhter my tech skills and meet amazing people, while also ampluifying our own individualities.',
    },
  ];

  return (
    <div className='contain relative mb-32 pt-20 text-white md:mb-52'>
      <div className='mb-96'>
        <h3 className='text-title mb-5 w-[60%]'>
          See what lorempsu sit testimonials
        </h3>
        <div className='grid grid-cols-2 border-t-[1px] border-t-white pt-5'>
          <p className='text-body uppercase'>About Us</p>
          <p className='text-body'>
            The quick brown fox jumps over the lazy dog near the bank of the
            river Reference site about Lorem Ipsum, giving information on its
            origins, as well as a random Lipsum generator.
          </p>
        </div>
      </div>

      <div className='relative flex gap-60'>
        <div className='flex gap-20 self-stretch [&>*]:border-r-[1px] [&>*:after]:content-[""]'>
          <span className='border-r-blue-800' />
          <span className='border-r-green-800' />
          <span className='border-r-red-800' />
          <span className='border-r-yellow-800' />
        </div>

        <div className='grid grid-cols-2'>
          <div className='testimony'>
            {testimonials.map((testimonial, i) => {
              return (
                (i + 1) % 2 !== 0 && (
                  <Message key={testimonial.name} index={i} {...testimonial} />
                )
              );
            })}
          </div>

          <div className='testimony justify-center'>
            {testimonials.map((testimonial, i) => {
              return (
                (i + 1) % 2 === 0 && (
                  <Message key={testimonial.name} index={i} {...testimonial} />
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
        className='pointer-events-none absolute top-72 right-0'
      />
    </div>
  );
};

interface MessageProps {
  index: number;
  name: string;
  role: string;
  message: string;
}

const Message = ({ index, name, role, message }: MessageProps) => {
  return (
    <div>
      <div className='mb-3  flex gap-4'>
        <span className='font-merchant-thin text-5xl'>{index + 1}.</span>
        <div className='font-montserrat'>
          <p className='font-medium'>{name}</p>
          <p className='font-light text-gray-300'>{role}</p>
        </div>
      </div>
      <p className='text-body'>
        <q>{message}</q>
      </p>
    </div>
  );
};
