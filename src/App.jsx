import './App.css'
import Aari from './Components Html/Aari'
import About from './Components Html/About'
import Boutique from './Components Html/Boutique'
import Bridal from './Components Html/Bridal'
import Footer from './Components Html/Footer'
import Home from './Components Html/Home'
import Navbars from './Components Html/Navbars'
import { Route, Routes } from 'react-router-dom'
import Tailoring from './Components Html/Tailoring'
import FitnessYoga from './Components Html/FitnessYoga'
import Bharatanatyam from './Components Html/Bharatanatyam'

function App() {

  return (
    <>
    <Navbars/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/bridal" element={<Bridal/>}/>
      <Route path='/boutique' element={<Boutique/>} />
      <Route path="aari" element={<Aari/>} />
      <Route path='tailoring' element={<Tailoring/>}  />
      <Route path="fitnessyoga" element={<FitnessYoga/>} />
      <Route path='bharatanatyam' element={<Bharatanatyam/>} />
      
    </Routes>
      <Footer/>
    </>
  )
}
 
export default App