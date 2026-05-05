import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Aeronaves from '../pages/Aeronaves'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path='/aeronaves' element={<Aeronaves />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes