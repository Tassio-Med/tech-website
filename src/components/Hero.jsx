import React from "react";

import Image from '../images/handPhone.png';

import { FiDatabase } from 'react-icons/fi';
import { MdSecurity, MdOutlineDesignServices, MdOutlineCloudUpload } from 'react-icons/md';


function Hero(){
  return(
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[77.5rem] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Lorem ipsum</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Lorem ipsum</h1>
          <p className="text-2xl">Lorem ipsum dolor.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Let's start</button>
        </div>
        <div>
          <img src={Image} alt="/" className="w-full"/>
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[47.5rem] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Our Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500"><FiDatabase className="h-6 text-indigo-600"/>Database</p>
            <p className="flex px-4 py-2 text-slate-500"><MdOutlineCloudUpload className="h-6 text-indigo-600"/>Cloud</p>
            <p className="flex px-4 py-2 text-slate-500"><MdSecurity className="h-6 text-indigo-600"/>Security</p>
            <p className="flex px-4 py-2 text-slate-500"><MdOutlineDesignServices className="h-6 text-indigo-600"/>Ui/Ux</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero;