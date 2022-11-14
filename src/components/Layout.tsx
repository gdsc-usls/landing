import React from 'react';
// import { Navbar, Footer } from '.';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='mx-auto min-h-screen max-w-screen-xl '>
        {/* <Navbar /> */}
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
};
