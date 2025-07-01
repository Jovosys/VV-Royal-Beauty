import './App.css'
import Footer from './Components Html/Footer'
import Home from './Components Html/Home'

import Navbars from './Components Html/Navbars'
import SmoothScroll from './Components Html/SmoothScroll'

function App() {

  return (
    <>
    <Navbars/>
    {/* <SmoothScroll> */}
      <Home/>
      
    {/* </SmoothScroll> */}
      
      <Footer/>
    </>
  )
}
 
export default App
