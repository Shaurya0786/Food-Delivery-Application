import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Add from "./pages/Add/Add"
import Orders from "./pages/Orders/Orders"
import List from "./pages/List/List"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
