import {React,useContext,useEffect,useState} from 'react'
import './placeorder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function PlaceOrder(){
  const {totalAmount,token,food_list,cartItem,url} = useContext(StoreContext)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }


  const placeOrder=async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItem[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItem[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:totalAmount()+2,
    }
    let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if(response.data.success)
    {
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
    else
    {
      alert("error")
    }
  }
  const navigate=useNavigate();

  useEffect(()=>{
    if(!token)
    {
      navigate('/cart')
    }else if(totalAmount()===0)
    {
      navigate('/cart')
    }
  },[token])

  return (
    <form className='place-order' onSubmit={placeOrder}>
      <div className="placeorder-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder="FirstName" name="firstName" onChange={onChangeHandler} value={data.firstName} id="" />
          <input type="text" placeholder="LastName" name="lastName" onChange={onChangeHandler} value={data.lastName} id="" />
        </div>
        <input type="text" placeholder="Email Address" name="email" onChange={onChangeHandler} value={data.email} id="" />
        <input type="text" placeholder="Street" name="street" onChange={onChangeHandler} value={data.street} id="" />
        <div className='multi-fields'>
          <input type="text" placeholder="City" name="city" onChange={onChangeHandler} value={data.city} id="" />
          <input type="text" placeholder="State" name="state" onChange={onChangeHandler} value={data.state} id="" />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder="ZipCode"  onChange={onChangeHandler} value={data.zipcode} id="" />
          <input type="text" placeholder="Country" onChange={onChangeHandler} value={data.country} id="" />
        </div>
        <input type="number" placeholder='Phone Number' onChange={onChangeHandler} value={data.phone} id="" />
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
            <p>{totalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Total</p>
            <p>{totalAmount()===0?0:totalAmount()+2}</p>
            </div>
          </div>
          <button type='submit'> PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
