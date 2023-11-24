import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <div>
      <div className='containerNavbar'>
        <ol>
            <li><Link to={'/'}>Home</Link></li>  
            <li><Link to={'serve'}>Products</Link></li>
            <li><Link to={'abt'}>About us</Link></li>
            <li><Link to={'con'}>Contact Us</Link></li>
            <li><Link to={'gal'}>Gallery</Link></li>
           
        </ol>

      </div>
    </div>
  )
}

export default Navbar