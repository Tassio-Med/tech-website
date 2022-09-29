import React, { useState } from 'react';

import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

function Navbar()  {
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar)

  return (
    <div  className="w-screen h-20 z-10 bg-zinc-200 fixed drop-shadow-md">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold mr-4 md:text-4xl">LOGO.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Platforms</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!navbar ? <HiMenu className="w-5" /> : <GrClose className="w-5" />}
          
        </div>
      </div>
      <ul className={!navbar ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <li className="border-b-2 border-zinc-300 w-full">Contact</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  )

}

export default Navbar;
