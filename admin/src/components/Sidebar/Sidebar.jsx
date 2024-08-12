import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    
    const [isactive,setIsActive] = useState(null)

    return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className={isactive=='add'?'sidebar-option active':'sidebar-option'} onClick={()=>{setIsActive('add')}}>
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className={isactive=='list'?'sidebar-option active':'sidebar-option'} onClick={()=>{setIsActive('list')}}>
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='orders' className={isactive=='orders'?'sidebar-option active':'sidebar-option'} onClick={()=>{setIsActive('orders')}}>
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}


export default Sidebar
