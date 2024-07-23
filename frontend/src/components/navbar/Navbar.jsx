import React from 'react'
import { assets } from '../../assets/assets'
import './navbar.css'

function Navbar () {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo w-37'/>
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div>
            <img src={assets.basket_icon} alt="" />
            {/* <div> </div> */}
        </div>
        <button className='navbar-button'>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
