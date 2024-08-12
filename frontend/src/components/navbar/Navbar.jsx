import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import {Link,useNavigate} from 'react-router-dom'
import './navbar.css'
import { StoreContext } from '../../Context/StoreContext'

function Navbar ({setShowLogin}) {

  const [menu,setMenu] = useState("Home")
  const {totalAmount,token,setToken} = useContext(StoreContext)

  const navigate=useNavigate();

  const logout = () =>{
    localStorage.removeItem("token")
    setToken("");
    navigate("/");
  }

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
            <div className={totalAmount()===0?'':'dot'}></div>
        </div>
        
        {!token?<button className='navbar-button' onClick={()=>{setShowLogin(true)}}>sign in</button>
      :<div className='navbar-profile'>
        <img src={assets.profile_icon} alt="" />
        <ul className="navbar-profile-dropdown">
          <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
          <hr />
          <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
        </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
