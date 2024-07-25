import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../Context/StoreContext'
function Cart(){
  
  const{cartItem,food_list,removeItem} = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0) return (
            <div>
              <div className='cart-items-title cart-items-item'>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItem[item._id]}</p>
              <p>${item.price*cartItem[item._id]}</p>
              <p onClick={()=>{removeItem(item._id)}} className='cross'>x</p>
            </div>
            <hr />
            </div>
          )
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Total</p>
            <p>{0}</p>
            </div>
          </div>
          <button> PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
            <div>
              <p>if you have a promo code,Enter it here</p>
              <div className='cart-promo-code-input'>
                <input type="text" placeholder='PROMO CODE' name="" id="" />
                <button>Submit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart
