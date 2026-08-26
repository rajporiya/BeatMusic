import { Routes, Route } from 'react-router-dom'
import HeroSectionSIdeNavbar from './AppComponants/HeroSectionSIdeNavbar'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col overflow-hidden select-none">
      <Routes>
        <Route path="/" element={<HeroSectionSIdeNavbar />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
