import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import PageNotFound from './pages/NotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {!showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/order' element={<PlaceOrder/>}/>
        <Route  path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
