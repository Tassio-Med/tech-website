import React from "react"

import { HiMenu } from 'react-icons/hi'

function Navbar()  {
  return (
    <div  className="w-screen h-20 z-10 bg-zinc-200 fixed drop-shadow-md">
      <div className="px-2 flex justify-between items-centerems w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold mr-4 sm:text-4xl">LOGO.</h1>
          <ul className="hidden sm:flex">
            <li>Home</li>
            <li>About</li>
            <li>Platforms</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hidden sm:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">Sign In</button>
          <button className="px-8 py-3">Sign In</button>
        </div>
        
      </div>
      <HiMenu className="w-5"/>
    </div>
  )

}

export default Navbar;
