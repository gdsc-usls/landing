/* eslint-disable no-param-reassign */
import React, { SetStateAction, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <NavBtns isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </nav>
  );
};

const NavBtns = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <div className='fixed left-0 right-0 z-40 m-auto mt-10 flex max-w-screen-2xl justify-between px-7 text-white mix-blend-difference md:px-14 lg:items-center'>
      <span className='logo font-merchant-expanded text-xl opacity-0'>
        GDSC USLS
      </span>

      <button
        type='button'
        className='menu-burger group flex w-8 cursor-pointer flex-col items-center justify-center space-y-1 opacity-0 [&>span]:block [&>span]:h-[1.5px] [&>span]:w-full [&>span]:transform [&>span]:bg-white [&>span]:transition [&>span]:duration-300'
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
    </div>
  );
};

const Menu = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const navText = ['about', 'projects', 'events', 'contact'];

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

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToSection = (scrollElement: string) => {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: { y: `#${scrollElement}` },
      ease: 'power2.easeOut',
    });
  };

  return (
    <div className='menu fixed top-0 left-0 grid h-screen w-screen place-items-center justify-center space-y-1 bg-black text-white'>
      <div className='flex flex-col items-center gap-5'>
        {navText.map((text) => (
          <a
            key={text}
            href={`#${text}`}
            className='menu-item font-merchant-thin-condensed text-6xl uppercase text-white'
            onClick={() => {
              setIsOpen(false);
              scrollToSection(text);
            }}
          >
            <div className='flex'>
              <span className='menu-item-text'>{text}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
