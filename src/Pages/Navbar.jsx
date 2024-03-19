import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from './logo.png'

function Navbar() {
  return (
    <nav>
    <ul className="navbar-list">
    
      <li className='button-home'><Link to="/" className='link1'>Home</Link></li>
      <li className='button-home'><Link to="/about" className='link2'>Music</Link></li>
      
    </ul>
    <img src={logo} alt="logo" className='logo'/>
  </nav>
  )
}

export default Navbar