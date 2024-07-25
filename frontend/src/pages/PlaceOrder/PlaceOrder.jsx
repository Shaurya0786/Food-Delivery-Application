import {React,useContext} from 'react'
import './placeorder.css'
import { StoreContext } from '../../Context/StoreContext'



function PlaceOrder(){
  const {totalAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="placeorder-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder="FirstName" id="" />
          <input type="text" placeholder="LastName" id="" />
        </div>
        <input type="text" placeholder="Email Address" id="" />
        <input type="text" placeholder="Street" id="" />
        <div className='multi-fields'>
          <input type="text" placeholder="City" id="" />
          <input type="text" placeholder="State" id="" />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder="ZipCode" id="" />
          <input type="text" placeholder="Country" id="" />
        </div>
        <input type="number" placeholder='Phone Number' id="" />
      </div>
      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{totalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Total</p>
            <p>{totalAmount()+2}</p>
            </div>
          </div>
          <button> PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
