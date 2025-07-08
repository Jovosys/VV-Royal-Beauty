import './App.css'
import About from './Components Html/About'
import Bridal from './Components Html/Bridal'
import Footer from './Components Html/Footer'
import Home from './Components Html/Home'
import Navbars from './Components Html/Navbars'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbars/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      {/*dropdown  */}
      <Route path="/bridal" element={<Bridal/>} />
      {/* <Route path="/fashion" element={<Fashion/>} /> */}
      {/* <Route path="/aari" element={<Aari/>} /> */}
      {/* <Route path="/tailoring" element={<Tailoring/>} /> */}
      {/* <Route path="/fitness" element={<Fitness/>} /> */}
      {/* <Route path="/bharatanatyam" element={<Bharatanatyam/>} /> */}
      {/* <Route path="/coaching" element={<Coaching/>} /> */}
    </Routes>
    {/* <About/>
    <Bridal/> */}
      <Footer/>
    </>
  )
}
 
export default App
