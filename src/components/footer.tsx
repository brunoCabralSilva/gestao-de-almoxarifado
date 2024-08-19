'use client'
import Image from "next/image";
import React from 'react';

export default function Footer() {
  return (
    <footer className={`relative text-white px-8 flex flex-col sm:flex-row justify-between items-center w-full py-2 z-5 bg-black`}>
      <div className="pl-0 sm:w-1/4 flex flex-row justify-center sm:justify-start p-2 my-4 sm:my-0">
        {/* <Image
          src="/images/logos/almoxarifado.jpg.png"
          alt="Logo do Garou Nordeste"
          width={1000}
          height={800}
          className="w-12 mr-3"
        /> */}
      </div>
      <div className="sm:w-3/4 text-sm">
        <p className="text-center sm:text-right w-full">© 2024 Bruno Gabryell Cabral da Silva. Todos os direitos reservados.</p>
        <p
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="pt-3 pb-2 sm:py-0 text-center sm:text-right w-full cursor-pointer underline text-orange-300 transition-colors duration-700"
        >
          Retornar ao Topo
        </p>
      </div>
    </footer>
  );
}