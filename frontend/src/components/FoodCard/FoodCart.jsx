import React, { useState } from 'react'
import './FoodCart.css'
import { assets } from '../../assets/assets'

const FoodCart = ({id,name,price,description,image}) => {

    const [itemCount,setItemCount] = useState(0)


  return (
    <div className='food-card'>
        <div className='food-card-img-container'>
            <img src={image} alt=""  className='food-card-image'/>
            {!itemCount?
            <img src={assets.add_icon_white} alt=""  onClick={()=>{setItemCount(prev=>prev+1)}} className='add'/>
            :
            <div className='food-item-counter'>
                <img src={assets.remove_icon_red} alt=""  onClick={()=>{setItemCount(prev=>prev-1)}}/>
                <p>{itemCount}</p>
                <img src={assets.add_icon_green} alt=""  onClick={()=>{setItemCount(prev=>prev+1)}}/>
            </div>}
        </div>
        <div className="info">
            <div className="food-card-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-card-description'>
                {description}
            </p>
            <p className='food-card-price'>${price}</p>
        </div>
    </div>
  )
}


export default FoodCart
