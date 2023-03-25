import React from 'react';
import Image from 'next/image';

export const Events = () => {
  const events = [
    {
      title: 'Solution Challenge',
      date: 'SOLCHA 2023',
      link: 'https://gdsc-usls.live/solcha-info',
    },
    {
      title: 'International Event: Perennial',
      date: 'Dec 5 - 6, 2022',
      link: 'https://gdsc.community.dev/events/details/developer-student-clubs-university-of-st-la-salle-presents-international-gdsc-chapters-collab-perennial-diving-into-the-world-of-software/',
    },
    {
      title: '1st General Assembly',
      date: 'September 30, 2022',
      link: 'https://gdsc.community.dev/events/details/developer-student-clubs-university-of-st-la-salle-presents-1st-general-assembly/',
    },
    {
      title: 'Info Session',
      date: 'Sep 24, 2022',
      link: 'https://gdsc.community.dev/events/details/developer-student-clubs-university-of-st-la-salle-presents-info-session-ay-2022-2023/',
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
            <a href={event.link} target='_blank' rel='noreferrer'>
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
