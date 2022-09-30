import React from "react";

import { FiPhone } from "react-icons/fi";
import { MdDeveloperBoard } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

import teamImg from '../images/tech-group.png'

function Team(){
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[43.75rem] bg-gray-900/90 absolute">
        <img src={teamImg} alt="time" className="w-full h-full object-cover mix-blend-overlay"/>
      </div>
      <div className="max-w-[77.5rem] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text 3-xl pt-8 text-slate-300 uppercase text-center">Nosso Time</h2>
          <h3 className="text-5xl font-bold py-6 text-center">Fale conosco e encontre sua solução</h3>
          <p className="py-4 text-3xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum saepe consectetur, vitae ipsum qui veniam perferendis illo quas odit? Eos reiciendis eveniet harum quis saepe deserunt dicta magni corporis?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-20 p-6 bg-indigo-600 text-white rounded-lg mt-[-4rem] flex items-center">
                <FiPhone className="text-white text-3xl"/>
              </div>
              <h3 className="font-bold text-2xl my-6">Atendimento</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut consequuntur quos voluptates itaque cupiditate laborum nihil recusandae! Dicta necessitatibus sequi beatae magnam ipsam a porro voluptas sapiente ullam at.</p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">Fale conosco <BsArrowRight className="w-4 ml-2"/></p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-20 p-6 bg-indigo-600 text-white rounded-lg mt-[-4rem] flex items-center">
                <MdDeveloperBoard className="text-white text-3xl"/>
              </div>
              <h3 className="font-bold text-2xl my-6">Time Dev</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut consequuntur quos voluptates itaque cupiditate laborum nihil recusandae! Dicta necessitatibus sequi beatae magnam ipsam a porro voluptas sapiente ullam at.</p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">Fale conosco <BsArrowRight className="w-4 ml-2"/></p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-20 p-6 bg-indigo-600 text-white rounded-lg mt-[-4rem] flex items-center">
                <SiMaterialdesignicons className="text-white text-3xl"/>
              </div>
              <h3 className="font-bold text-2xl my-6">Time Design</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut consequuntur quos voluptates itaque cupiditate laborum nihil recusandae! Dicta necessitatibus sequi beatae magnam ipsam a porro voluptas sapiente ullam at.</p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">Fale conosco <BsArrowRight className="w-4 ml-2"/></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team;