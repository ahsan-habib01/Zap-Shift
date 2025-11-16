import React from 'react';
import Logo from '../Components/Logo/Logo';
import authImage from '../assets/authImage.png';
import { Outlet } from 'react-router';


const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <Logo></Logo>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-20">
        <aside className="flex-1">
          <Outlet></Outlet>
        </aside>
        <aside className="flex-1">
          <img src={authImage} alt="" />
        </aside>
      </div>
    </div>
  );
};

export default AuthLayout;
