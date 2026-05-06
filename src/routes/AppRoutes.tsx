import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Aeronaves from '../pages/Aeronaves'
import Pecas from '../pages/Pecas'
import Funcionarios from '../pages/Funcionarios'
import Etapas from '../pages/Etapas'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path='/aeronaves' element={<Aeronaves />} />
        <Route path='/pecas' element={<Pecas />} />
        <Route path='/etapas' element={<Etapas />} />
        <Route path='/funcionarios' element={<Funcionarios />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes