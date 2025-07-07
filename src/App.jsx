import './App.css'
import About from './Components Html/About'
import Footer from './Components Html/Footer'
import Home from './Components Html/Home'
import Navbars from './Components Html/Navbars'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbars/>
    
    {/* <Routes> */}
      {/* <Route path="/" element={<Home/>} /> */}
      <Home/>
    {/* </Routes> */}
    {/* <About/> */}
      <Footer/>
    </>
  )
}
 
export default App
