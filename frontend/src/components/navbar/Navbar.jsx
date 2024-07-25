import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar ({setShowLogin}) {

  const [menu,setMenu] = useState("Home")

  function setNavMenu(e){
    setMenu(e.target.innerHTML)
  }
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo w-37'/></Link>
      <ul className='navbar-menu' >
        <Link to='/' onClick={setNavMenu} className={menu=="Home"?"active":""} >Home</Link>
        <a  href="#explore-menu" onClick={setNavMenu} className={menu=="Menu"?"active":""}  >Menu</a>
        <a href="#footer"  onClick={setNavMenu} className={menu=="Contact us"?"active":""}>Contact us</a>
        <a  href="#app-download" onClick={setNavMenu} className={menu=="Mobile-app"?"active":""}>Mobile-app</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-basket-icon'>
            <Link to="/cart"><img src={assets.basket_icon} alt=""   /></Link>
            <div className='dot'></div>
        </div>
        <button className='navbar-button' onClick={()=>{setShowLogin(false)}}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
