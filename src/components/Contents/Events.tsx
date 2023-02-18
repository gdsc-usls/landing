import React from 'react';
import Image from 'next/image';

export const Events = () => {
  const events = [
    {
      title: 'Devfest 2022',
      date: 'October 16, 2022',
      link: '#',
    },
    {
      title: 'General Assembly',
      date: 'August 7, 2022',
      link: '#',
    },
    {
      title: 'International Event',
      date: 'November 19, 2022',
      link: '#',
    },
    {
      title: 'Info Session',
      date: 'February 26, 2023',
      link: '#',
    },
  ];

  return (
    <div id='events' className='contain relative pb-20'>
      <ul>
        {events.map((event) => (
          <li
            key={event.title}
            className='border-b-[1px] border-b-gray-200 py-6 text-white md:py-8 lg:py-10'
          >
            <p className='mb-1 font-montserrat uppercase [fontSize:clamp(0.6rem,1.5vw,1rem)] lg:mb-2  xl:mb-4'>
              {event.date}
            </p>
            <a href={event.link}>
              <h3 className='text-title inline-block uppercase'>
                {event.title}
              </h3>
            </a>
          </li>
        ))}
      </ul>

      <Image
        priority
        src='/images/gradients/gradientYellowRed.png'
        alt='Gradient Yellow'
        height={1000}
        width={1000}
        className='pointer-events-none absolute -top-1/2 right-0'
      />
    </div>
  );
};
