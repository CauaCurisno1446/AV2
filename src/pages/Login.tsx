"use client"

import { NavLink } from "react-router-dom";
import Aviao from "../assets/img/aviao.png"
import LogoDark from "../components/LogoDark"

function Login(){
  const StyleInput = "w-1/2 h-[60px] p-4 shadow-xl rounded-[10px] focus-within:outline-2 focus-within:outline-[var(--azul)]"

  return (
    <section className="w-full h-screen grid grid-cols-[1fr_1fr]">
      <div className="w-full h-full grid grid-rows-[1fr_3fr]">

        <div className="flex items-center justify-start ml-20">
          <LogoDark size={200} />
        </div>

        <div className="flex flex-col justify-center items-start ml-20 gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-7xl font-bold">
              Olá, <br /> Bem-vindo de volta!
            </h1>
            <p className="text-gray-500">Acesse sua conta para gerenciar suas informações, <br /> acompanhar operações e manter tudo sob controle de forma simples e segura.</p>
          </div>

          <div className="flex flex-col gap-4 w-full justify-center">
            <input type="text" placeholder="Usuário..." className={StyleInput} />
            <input type="password" placeholder="Senha..." className={StyleInput} />

            <input type="submit" value="Entar" className="bg-[var(--azul-escuro)] hover:bg-[var(--azul)] flex items-center justify-center h-[50px] w-1/6 rounded-[10px] text-[var(--branco)] duration-200 cursor-pointer" />

            <NavLink to="/home">Home</NavLink>
          </div>

        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div
          style={{ backgroundImage: `url(${Aviao})` }}
          className="w-[80%] h-[90%] rounded-[40px] bg-cover bg-center"
        />
      </div>

    </section>
  );
}

export default Login