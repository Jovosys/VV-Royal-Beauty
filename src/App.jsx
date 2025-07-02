import './App.css'
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
      
    </Routes>
    
      <Footer/>
    </>
  )
}
 
export default App
