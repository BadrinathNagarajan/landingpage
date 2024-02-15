import { useState } from 'react'
import Navbar from './components/Navbar'
import Masthead from './components/Masthead'
import Icons from './components/Icons'
import Images from './components/Images'
import Secsignup from './components/Secsignup'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="wrapper"> 
    <Navbar/>
    <Masthead/>
    <Icons/>
    <Images/>
    <Secsignup/>
    <Footer/>
    </div>
  )
}

export default App
