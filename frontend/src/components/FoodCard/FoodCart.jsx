import React, { useContext, useState } from 'react'
import './FoodCart.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodCart = ({id,name,price,description,image}) => {

    const [itemCount,setItemCount] = useState(0)

    const {addItem,removeItem,cartItem,setCartItem} = useContext(StoreContext)
    
  return (
    <div className='food-card'>
        <div className='food-card-img-container'>
            <img src={image} alt=""  className='food-card-image'/>
            {!cartItem[id]
            ?<img src={assets.add_icon_white} alt=""  onClick={()=>addItem(id)} className='add'/>
            :
            <div className='food-item-counter'>
                <img src={assets.remove_icon_red} alt=""  onClick={()=>removeItem(id)}/>
                <p>{cartItem[id]}</p>
                <img src={assets.add_icon_green} alt=""  onClick={()=>addItem(id)}/>
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
