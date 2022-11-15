import React from 'react';

export const Navbar = () => {
  const navText = ['About Us', 'Projects', 'Events', 'Contact Us', 'Join Us!'];

  return (
    <nav className='fixed left-0 right-0 z-40 m-auto mt-10 flex max-w-screen-2xl justify-between px-7 text-white mix-blend-difference md:px-14 lg:items-center'>
      <span className='logo font-merchant-expanded text-xl'>GDSC USLS</span>
      <ul className='flex flex-col space-y-1 lg:flex-row lg:space-y-0  lg:space-x-10'>
        {navText.map((text) => (
          <li
            className='hover-effect font-montserrat text-xs uppercase'
            key={text}
          >
            <a href='#'>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
