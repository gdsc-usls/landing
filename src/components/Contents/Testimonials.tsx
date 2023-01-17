import React from 'react';

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
    <div className='contain mb-32 text-white md:mb-52'>
      <div className='mb-72'>
        <h3 className='text-title mb-5 w-[55%]'>
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

      <div className='relative flex gap-64'>
        <div className='flex h-full gap-24'>
          <span className='after:bg-blue-700' />
          <span className='after:bg-green-700' />
          <span className='after:bg-red-700' />
          <span className='after:bg-yellow-700' />
        </div>

        <div className='flex'>
          <div className='flex flex-col gap-[40rem] border-x-[1px] border-x-gray-500 px-12'>
            {testimonials.map((testimonial, i) => {
              return (
                (i + 1) % 2 !== 0 && (
                  <Message key={testimonial.name} index={i} {...testimonial} />
                )
              );
            })}
          </div>

          <div className='flex flex-col justify-center gap-[40rem] border-r-[1px] border-r-gray-500 px-12'>
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
      <div className='mb-3 flex gap-4'>
        <span className='font-merchant-thin text-5xl'>{index + 1}.</span>
        <div className='font-montserrat'>
          <p className='font-medium'>{name}</p>
          <p className='font-light'>{role}</p>
        </div>
      </div>
      <p className='text-body'>
        <q>{message}</q>
      </p>
    </div>
  );
};
