import React from 'react';

export const Footer = () => {
  const data = [
    {
      title: 'Solcha',
      item1: {
        title: 'Information',
        link: '/solcha-info',
      },
      item2: {
        title: 'Register',
        link: 'https://developers.google.com/community/gdsc-solution-challenge',
      },
      item3: {
        title: 'SDGs',
        link: 'https://developers.google.com/community/gdsc-solution-challenge/UN-goals',
      },
    },

    {
      title: 'Projects',
      item1: {
        title: 'ID Generator',
        link: 'https://gdsc-usls-id.vercel.app/',
      },
      item2: {
        title: 'Umamin',
        link: 'https://umamin.link/',
      },
      item3: {
        title: 'Landing',
        link: 'https://github.com/gdsc-usls/landing',
      },
    },

    {
      title: 'Contact',
      item1: {
        title: 'Github',
        link: 'https://github.com/gdsc-usls',
      },
      item2: {
        title: 'Facebook',
        link: 'https://www.facebook.com/dsc.usls',
      },
      item3: {
        title: 'Instagram',
        link: 'https://www.instagram.com/gdsc_usls/',
      },
    },
  ];

  return (
    <footer className='contain mt-96 flex w-full flex-col justify-between border-t-[1px] border-t-gray-500 pt-16 font-montserrat '>
      <div className='flex w-full flex-col justify-between gap-20 whitespace-nowrap lg:flex-row lg:gap-40 xl:gap-96'>
        <div className='text-white'>
          <div className='block text-3xl font-medium'>
            <p className='font-merchant-thin-condensed'>
              GDSC — University of St. La Salle
            </p>
            <p className='text-xl font-light text-gray-400'>
              Powered by Intellect, <br />
              Driven by Values
            </p>
          </div>
        </div>

        <div className='flex w-full justify-between'>
          {data.map((data) => {
            const { title, item1, item2, item3 } = data;

            return (
              <div key={title} className='space-y-2 text-sm md:text-base'>
                <h3 className='font-medium text-white'>{title}</h3>
                <ul className='flex flex-col  space-y-2 font-normal text-gray-400 [&>li>a:hover]:text-gray-500 [&>li>a:hover]:transition-all'>
                  <li>
                    <a
                      target='_blank'
                      rel='noreferrer noopener'
                      href={item1.link}
                    >
                      {item1.title}
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      rel='noreferrer noopener'
                      href={item2.link}
                    >
                      {item2.title}
                    </a>
                  </li>
                  {item3 && (
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer noopener'
                        href={item3.link}
                      >
                        {item3.title}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <p className='mt-28 pb-5 text-center text-xs text-gray-400 md:text-base'>
        &copy; 2023 Google Developer Student Clubs — USLS. All Rights Reserved.
      </p>
    </footer>
  );
};
