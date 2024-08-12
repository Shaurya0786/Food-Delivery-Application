import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = ({children})=>{
    const [cartItem,setCartItem] = useState({})
    const url="http://localhost:4000"
    
    const [token,setToken]= useState("")

    const [food_list,setFoodList]=useState([]);

    const addItem = async(itemid)=>{
        console.log(itemid)
        if(!cartItem[itemid]) setCartItem((prevState => ({...prevState,[itemid]:1})))
        else setCartItem((prevState => ({...prevState,[itemid]:prevState[itemid]+1})))
        if(token){
            await axios.post(url+"/api/cart/add",{itemid},{headers:{token}})
        }
    }

    const removeItem = async(itemid) => {
        if(cartItem[itemid]===0) setCartItem((prevState => {return {...prevState,[itemid]:0}}))
        else setCartItem((prevState => {return {...prevState,[itemid]:prevState[itemid]-1}}))
        if(token){await axios.post(url+"/api/cart/remove",{itemid},{headers:{token}})}
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

    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/foods/");
        setFoodList(response.data.data);
    }

    const loadCartData = async (token)=>{
        const response=await axios.get(url+"/api/cart/",{},{headers:{token}})
        console.log(response)
        setCartItem(response.data.cartData)
    }

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[]);


    const contextValue = {
        food_list,
        addItem,
        removeItem,
        cartItem,
        setCartItem,
        totalAmount,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
        {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider