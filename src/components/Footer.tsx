import React from 'react';

export const Footer = () => {
  const data = [
    {
      title: 'Solcha',
      items: [
        {
          title: 'Information',
          link: '/solcha-info',
        },
        {
          title: 'Register',
          link: 'https://developers.google.com/community/gdsc-solution-challenge',
        },
        {
          title: 'SDGs',
          link: 'https://developers.google.com/community/gdsc-solution-challenge/UN-goals',
        },
      ],
    },

    {
      title: 'Projects',
      items: [
        {
          title: 'ID Generator',
          link: 'https://id.gdsc-usls.live/',
        },
        {
          title: 'Certificate Generator',
          link: 'https://certs.gdsc-usls.live/',
        },
        {
          title: 'Umamin',
          link: 'https://umamin.link/',
        },
      ],
    },

    {
      title: 'Contact',
      items: [
        {
          title: 'Github',
          link: 'https://github.com/gdsc-usls',
        },
        {
          title: 'Facebook',
          link: 'https://www.facebook.com/dsc.usls',
        },
        {
          title: 'Instagram',
          link: 'https://www.instagram.com/gdsc_usls/',
        },
      ],
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
            const { title, items } = data;

            return (
              <div key={title} className='space-y-2 text-sm md:text-base'>
                <h3 className='font-medium text-white'>{title}</h3>
                <ul className='flex flex-col  space-y-2 font-normal text-gray-400 [&>li>a:hover]:text-gray-500 [&>li>a:hover]:transition-all'>
                  {items.map((item) => (
                    <li key={item.title}>
                      <a
                        target='_blank'
                        rel='noreferrer noopener'
                        href={item.link}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <p className='mt-28 pb-8 text-center text-xs text-gray-400 md:text-base'>
        &copy; 2023 Google Developer Student Clubs — USLS. All Rights Reserved.
      </p>
    </footer>
  );
};
