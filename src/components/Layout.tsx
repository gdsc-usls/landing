import React from 'react';
import { Footer, Navbar } from '.';
import { Contact } from './Contents';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='mx-auto max-w-[1920px]'>
        <Navbar />
        {children}
      </main>

      <Contact />
      <Footer />
    </>
  );
};
