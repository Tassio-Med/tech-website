import React from "react";

import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return(
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[77.5rem] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Soluções</h6>
          <ul>
            <li className="py-1">Cyber Security</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
            <li className="py-1">Mobile</li>
            <li className="py-1">DevOps</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Tech Company</h6>
          <ul>
            <li className="py-1">Sobre nós</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Vagas</li>
            <li className="py-1">Parceiros</li>
            <li className="py-1">Clientes</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Fale Conosco</h6>
          <ul>
            <li className="py-1">Atendimento</li>
            <li className="py-1">Time Dev</li>
            <li className="py-1">Time Design</li>
            <li className="py-1">Financeiro</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Termos</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Políticas</li>
            <li className="py-1">Financeiro</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Newsletter</p>
          <p className="py-4">Receba nossas atualizações e blogs no seu e-mail semanalmente.</p>
          <form className="flex flez-col sm:flex-row">
            <input type="email" placeholder="Insira seu e-mail" className="w-full p-2 mr-4 rounded-md mb-4"/>
            <button className="px-4 mb-4">Enviar</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[77.5rem] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[18.75rem] pt-4 text-2xl">
          <FaFacebook/>
          <FaInstagram/>
          <FaTwitter/>
          <FaLinkedin/>
          <FaGithub/>
        </div>
      </div>

    </div>
  )
}

export default Footer;