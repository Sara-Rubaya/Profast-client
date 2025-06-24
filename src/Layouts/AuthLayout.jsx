import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import ProFastLogo from '../Pages/Home/Home/Shared/ProfastLogo/ProFastLogo';

const AuthLayout = () => {
    return (
       <div className="p-12 bg-base-200 min-h-screen py-40">
        <div>
            <ProFastLogo></ProFastLogo>
        </div>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
        <img
      src={authImg}
      className="max-w-sm rounded-lg "
    />
    </div>
    <div className='flex-1'>
      <Outlet></Outlet>
      
    </div>
  </div>
</div>
    );
};

export default AuthLayout;