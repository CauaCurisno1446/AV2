import Logo from "./Logo"
import { NavLink } from "react-router-dom"
import { User } from "lucide-react"

function Header() { 

  return (
    <header className='grid grid-cols-3 w-full bg-[var(--azul-escuro)] h-[80px] justify-center items-center relative'>
      <div className="flex justify-center items-center gap-12">
        <NavLink to="/aeronaves" className="text-sm text-[var(--branco)] duration-200 font-semibold hover:text-[var(--azul)] transition-all">Aeronaves</NavLink>
        <NavLink to="#" className="text-sm text-[var(--branco)] duration-200 font-semibold hover:text-[var(--azul)] transition-all">Peças</NavLink>
        <NavLink to="#" className="text-sm text-[var(--branco)] duration-200 font-semibold hover:text-[var(--azul)] transition-all">Etapas</NavLink>
      </div>

      <div className="flex justify-center items-center">
        <NavLink to="/home">
          <Logo />
        </NavLink>
      </div>

      <div className="flex justify-center items-center gap-12">
        <NavLink to="#" className="text-sm text-[var(--branco)] duration-200 font-semibold hover:text-[var(--azul)] transition-all">Funcionários</NavLink>
        <User className="text-[var(--branco)] cursor-pointer" />
      </div>
    </header>
  )
}


export default Header