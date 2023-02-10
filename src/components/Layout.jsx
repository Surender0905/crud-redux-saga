import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex justify-center flex-col items-center p-12">
        {children}
      </main>
    </>
  );
};

export default Layout;
