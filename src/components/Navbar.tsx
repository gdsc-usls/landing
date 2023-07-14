/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen: GSAPTimeline = gsap.timeline();
  const menuClose: GSAPTimeline = gsap.timeline();

  const handleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const openMenu = () => {
    menuOpen
      .to('.menu', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power2.easeInOut',
        duration: 0.5,
      })
      .to(
        'body',
        {
          overflowY: 'hidden',
        },
        '<'
      )
      .fromTo(
        '.menu-item',
        {
          y: -150,
          opacity: 0,
          skewX: -10,
        },
        {
          y: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.7,
          stagger: -0.2,
          ease: 'power4.out',
        },
        '-=0.1'
      );
  };

  const closeMenu = () => {
    menuClose
      .fromTo(
        '.menu-item',
        {
          y: 0,
          opacity: 1,
          skewX: 0,
        },
        {
          skewX: -10,
          opacity: 0,
          y: -150,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power4.out',
        }
      )
      .to(
        'body',
        {
          overflowY: 'auto',
        },
        '<'
      )
      .to(
        '.menu',
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          ease: 'power2.easeInOut',
          duration: 0.5,
        },
        '-=0.4'
      );
  };

  return (
    <>
      <div className='fixed left-0 right-0 z-40 m-auto mt-10 flex max-w-screen-2xl justify-between px-7 text-white mix-blend-difference md:px-14 lg:items-center'>
        <Link
          href='/'
          className='logo font-merchant-expanded text-xl opacity-0'
        >
          GDSC USLS
        </Link>

        <button
          type='button'
          className='menu-burger group flex  w-8 cursor-pointer flex-col items-center justify-center space-y-1 py-3 opacity-0 [&>span]:block [&>span]:h-[1.5px] [&>span]:w-full [&>span]:transform [&>span]:bg-white [&>span]:transition [&>span]:duration-300'
          onClick={() => handleMenu()}
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
      {/**
       * MENU COMPONENT
       */}
      <Menu handleMenu={handleMenu} />
    </>
  );
};

const Menu = ({ handleMenu }: { handleMenu: () => void }) => {
  const router = useRouter();

  const navText = [
    {
      text: 'home',
      href: '/',
      behaviour: 'link',
    },
    {
      text: 'awards',
      href: '/awards',
      behaviour: 'link',
    },
    {
      text: 'events',
      href: 'events',
      behaviour: 'scroll',
    },
    {
      text: 'contact',
      href: 'contact',
      behaviour: 'scroll',
    },
  ];

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
  }, [router.pathname]);

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToSection = (scrollElement: string, offsetY: number) => {
    handleMenu();

    if (router.pathname !== '/') {
      router.push('/');
    }
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${scrollElement}`, offsetY },
      ease: 'power2.easeOut',
    });
  };

  return (
    <div className='menu fixed top-0 left-0 grid h-screen w-screen place-items-center justify-center space-y-1 bg-black text-white [clipPath:polygon(0%_0%,_100%_0%,_100%_0%,_0%_0%)]'>
      <div className='flex flex-col items-center gap-5'>
        {router.pathname === '/' &&
          navText.map((text) => (
            <button
              type='button'
              key={text.text}
              className='menu-item font-merchant-thin-condensed text-6xl uppercase text-white opacity-0'
              onClick={() => {
                if (text.behaviour === 'link') {
                  handleMenu();
                  router.push(text.href);
                } else {
                  scrollToSection(
                    text.href,
                    text.href === 'about' ? -150 : 100
                  );
                }
              }}
            >
              <div className='flex'>
                <span className='menu-item-text'>{text.text}</span>
              </div>
            </button>
          ))}

        {router.pathname !== '/' &&
          navText.map((text) => {
            return (
              text.behaviour === 'link' && (
                <button
                  type='button'
                  key={text.text}
                  className='menu-item font-merchant-thin-condensed text-6xl uppercase text-white opacity-0'
                  onClick={() => {
                    if (text.behaviour === 'link') {
                      handleMenu();
                      router.push(text.href);
                    } else {
                      scrollToSection(
                        text.href,
                        text.href === 'about' ? -150 : 100
                      );
                    }
                  }}
                >
                  <div className='flex'>
                    <span className='menu-item-text'>{text.text}</span>
                  </div>
                </button>
              )
            );
          })}
      </div>
    </div>
  );
};
