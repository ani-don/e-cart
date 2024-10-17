
import { Navigate, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'
import { Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Pages/Cart'
function App() {


  return (
    <>
     
<Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='/wishlist'element={<Wishlist/>}></Route>
  <Route path='/cart'element={<Cart/>}></Route>
  <Route path='/view/:id'element={<View/>}></Route>

  {/* {redirecte to home page} */}
  <Route path='/*'element={<Navigate to={"/"}/>}></Route>
</Routes>
      <Footer/>
    </>
  )
}

export default App
