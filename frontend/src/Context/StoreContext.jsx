import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = ({children})=>{
    const [cartItem,setCartItem] = useState({})

    const addItem = (itemid)=>{
        console.log(itemid)
        if(!cartItem[itemid]) setCartItem((prevState => ({...prevState,[itemid]:1})))
        else setCartItem((prevState => ({...prevState,[itemid]:prevState[itemid]+1})))
    }

    const removeItem = (itemid) => {
        if(cartItem[itemid]===0) setCartItem((prevState => {return {...prevState,[itemid]:0}}))
        else setCartItem((prevState => {return {...prevState,[itemid]:prevState[itemid]-1}}))
    }
    
    const totalAmount=()=>{
        let total = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
            let iteminfo = food_list.find((product)=>item===product._id)
            total+=iteminfo.price*cartItem[item]
            }
        }
        return total
    }


    const contextValue = {
        food_list,
        addItem,
        removeItem,
        cartItem,
        setCartItem,
        totalAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
        {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider