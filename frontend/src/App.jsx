import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import PageNotFound from './pages/NotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Myorders from './pages/MyOrders/Myorders'

function App() {

  const [showLogin,setShowLogin] = useState(true)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/orders' element={<PlaceOrder/>}/>
        <Route path='/myorders' element={<Myorders/>}/>
        <Route  path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
