'use client'
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showData, setShowData] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="w-full bg-white">
      <div className="w-full h-screen">
        {
          !showData 
            ? <div className="break-words h-screen flex items-center justify-center bg-dice w-full bg-center">
                {/* <Loading />                */}
              </div>                 
            : <div className="w-full h-screen break-words z-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="w-full col-span-2 absolute sm:relative">
                  <Image
                    src="/images/almoxarifado.jpg"
                    alt="Imagem de um Almoxarifado"
                    width={1000}
                    height={800}
                    className="w-full h-screen object-cover"
                  />
                </div>
                <div className="z-30 bg-white/60 break-words w-full flex items-center">
                  <div className="break-words p-4 space-y-4 md:space-y-6 sm:p-8 w-full">
                    <div className="break-words space-y-4 md:space-y-6">
                      <div className="text-2xl text-left font-bold mb-10">
                        Gestão de Almoxarifado
                      </div>
                      <div>
                        <label htmlFor="email" className="break-words block mb-2 text-sm font-medium text-black">Email</label>
                        <div className="break-words border-2 border-black border-prot-light rounded">
                          <input 
                            type="email"
                            name="email"
                            id="email" 
                            // onChange={(e) => setEmail(e.target.value)}
                            className="break-words bg-white border-none outline-none text-black text-sm rounded block w-full p-2.5 placeholder-gray-400 text-center sm:text-left" placeholder="name@company.com"
                          />
                        </div>
                      </div>
                      <div>
                          <label htmlFor="password" className="break-words block mb-2 text-sm font-medium text-black">Senha</label>
                          <div className="break-words border-2 border-black border-prot-light rounded">
                            <input 
                            type="password"
                            name="password"
                            id="password"
                            // onKeyDown={handleKeyDown}
                            // onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••"
                            className="break-words text-center sm:text-left bg-white border-none outline-none text-black text-sm rounded block w-full p-2.5 placeholder-gray-400"
                          />
                          </div>
                      </div>
                      <div className="break-words flex items-center justify-center sm:justify-end">
                          <button
                            // onClick={() => setShowForgotPassword(true) }
                            className="break-words text-sm font-medium underline text-black hover:font-bold transition-colors">
                              Esqueceu a Senha?
                          </button>
                      </div>
                      <button 
                        type="button"
                        // onClick={handleLogin}
                        id="sendMessage"
                        className="break-words bg-black border-2 border-black border-prot-light transition-colors hover:border-red-800 text-white w-full focus:ring-prot-light font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        { loading ? 'Verificando...' : 'Entrar'}
                      </button>
                      <Link
                        href="/register"
                        className="break-words text-sm font-light text-black flex flex-col sm:flex-row items-center justify-center">
                        Não tem uma conta? <span className="break-words font-medium hover:underline pl-1 underline text-black hover:font-bold transition-colors">Cadastrar</span>
                      </Link>   
                    </div>
                  </div>
                </div>
                {/* { showForgotPassword && <ForgotPassword /> } */}
              </div>
        }
      </div>
      <Footer />
    </div>
  );
}
