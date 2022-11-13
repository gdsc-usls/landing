import React from 'react';
import { Navbar, Footer } from '.';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='min-h-screen mx-auto max-w-screen-xl'>
        <Navbar />
        {children}
      </main>

      <Footer />
    </>
  );
};
