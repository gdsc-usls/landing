import React from 'react';
import { Navbar } from '.';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='mx-auto min-h-screen max-w-screen-2xl '>
        <Navbar />
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
};
