/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';

export const Navbar = () => {
  // const navText = ['About Us', 'Projects', 'Events', 'Contact Us', 'Join Us!'];

  useEffect(() => {
    const menuItems = [...(document.querySelectorAll('.menu-item') as any)];
    menuItems.forEach((item: any) => {
      const word = item.children[0].innerText.split('');
      item.children[0].innerHTML = '';
      word.forEach((letter: string, idx: number) => {
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`;
      });

      const cloneDiv = item.children[0].cloneNode(true);
      cloneDiv.style.position = 'absolute';
      cloneDiv.style.left = '0';
      cloneDiv.style.top = '0';
      item.appendChild(cloneDiv);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed left-0 right-0 z-40 m-auto mt-10 flex max-w-screen-2xl justify-between px-7 text-white mix-blend-difference md:px-14 lg:items-center'>
      <span className='logo font-merchant-expanded text-xl opacity-0'>
        GDSC USLS
      </span>

      <button
        type='button'
        className='group flex w-8 cursor-pointer flex-col items-center justify-center space-y-1 [&>span]:block [&>span]:h-[1.5px] [&>span]:w-full [&>span]:transform [&>span]:bg-white [&>span]:transition [&>span]:duration-300'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${
            isOpen
              ? 'translate-y-[3px] rotate-45 opacity-100 group-hover:opacity-50'
              : 'opacity-100 group-hover:opacity-50'
          }`}
        />
        <span
          className={`${
            isOpen
              ? '-translate-y-[3px] -rotate-45 opacity-100 group-hover:opacity-50'
              : 'opacity-100 group-hover:opacity-50'
          }`}
        />
      </button>
      {/* <div className='menu flex flex-col justify-center space-y-1 lg:flex-row lg:space-y-0  lg:space-x-10'>
        {navText.map((text) => (
          <a
            key={text}
            href={`#${text}`}
            className='menu-item p-nav font-montserrat text-xs uppercase opacity-0'
          >
            <div className='flex'>
              <span className='menu-item-text uppercase tracking-wider'>
                {text}
              </span>
            </div>
          </a>
        ))}
      </div> */}
    </nav>
  );
};
