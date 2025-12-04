import React from 'react';
import Logo from "./Logo.jsx";
import Navigate from './Navigate.jsx';

const Header = () => {
  return (
    <div className='py-5 px-6 text-center flex justify-between md:justify-around align-middle bg-zinc-900 text-white'>
      <Logo/>
      <Navigate/>
    </div>
  )
}

export default Header;