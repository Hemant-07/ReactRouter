import React from 'react'
import { Link } from 'react-router-dom'
import "../web/Style.css"


function Menu() {
  return (
    <div className="Header">
    <ul>
    <div className="h1">
        
     <li>  <Link to="/">Home</Link> </li>  
    </div>
    <div className="h2">

     <li>  <Link to="/about">About</Link>  </li>  
    </div>
    <div className="h3">

     <li>  <Link to="/contact">Contact</Link>  </li> 
    </div>
    <div className="h4">
        
     <li>  <Link to="/services">Services</Link></li> 
    </div>
    </ul>
      
    </div>
  )
} 

export default Menu
