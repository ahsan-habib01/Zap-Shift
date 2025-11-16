import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div className='bg-gray-100'>
      <div className="max-w-7xl mx-auto  flex flex-col min-h-screen ">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="w-full flex-1">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
