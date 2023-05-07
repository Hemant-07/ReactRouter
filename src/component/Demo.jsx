import React from 'react'
import Home  from "../component/Home"
import Contact from "../component/Contact"
import About from "../component/About"
import Services from "../component/Services"
import Menu from "../component/Menu"
import { BrowserRouter,Routes,Route } from 'react-router-dom'



function Demo() {
  return (
    <div>
  <BrowserRouter>
  <Menu/>  
    <Routes>
        <Route  exact path='/' element={<Home/>}></Route>
        <Route  exact path='/contact' element={<Contact/>}></Route>
        <Route   exact  path='/about' element={<About/>}></Route>
        <Route   path='/services' element={<Services/>}></Route>
      
      
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default Demo
