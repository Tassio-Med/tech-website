import React from "react";

import Image from '../images/handPhone.png'


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
      </div>

    </div>
  )
}

export default Hero;