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
      <div>
        <div>
          <h2>Nosso Time</h2>
          <h3>Fale conosco e encontre sua solução</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum saepe consectetur, vitae ipsum qui veniam perferendis illo quas odit? Eos reiciendis eveniet harum quis saepe deserunt dicta magni corporis?</p>
        </div>
        <div>
          <div>
            <div>
              <FiPhone className=""/>
              <h3>Atendimento</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut consequuntur quos voluptates itaque cupiditate laborum nihil recusandae! Dicta necessitatibus sequi beatae magnam ipsam a porro voluptas sapiente ullam at.</p>
            </div>
            <div>
              <p>Fale conosco <BsArrowRight/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;