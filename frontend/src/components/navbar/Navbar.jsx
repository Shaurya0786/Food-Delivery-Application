import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './navbar.css'

function Navbar () {

  const [menu,setMenu] = useState("Home")

  function setNavMenu(e){
    console.log(e.target.innerHTML)
    setMenu(e.target.innerHTML)
  }
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo w-37'/>
      <ul className='navbar-menu' >
        <li onClick={setNavMenu} className={menu=="Home"?"active":""} >Home</li>
        <li onClick={setNavMenu} className={menu=="Menu"?"active":""}  >Menu</li>
        <li onClick={setNavMenu} className={menu=="Mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={setNavMenu} className={menu=="Contact us"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-basket-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button className='navbar-button'>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
