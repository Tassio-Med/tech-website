import React from "react";

function About () {
  return(
    <div className="w-full my-32">
      <div className="max-w-[77.5rem] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Selo melhor Tech Company do mercado</h2>
          <p className="text-3xl py-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea consequatur ullam pariatur alias quas, ducimus necessitatibus maxime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-lg">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2"> Segurança</p>
          </div>
          <div className="border py-8 rounded-xl shadow-lg">
            <p className="text-6xl font-bold text-indigo-600">1°</p>
            <p className="text-gray-400 mt-2">Tech Prêmio 2022</p>
          </div>
          <div className="border py-8 rounded-xl shadow-lg">
            <p className="text-6xl font-bold text-indigo-600">175k</p>
            <p className="text-gray-400 mt-2">Colaboradores</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About