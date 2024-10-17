import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'
import Header from '../Components/Header'


function View() {
  const[product,setProduct]=useState({})
  const {loading}=useSelector((state)=>state.productReducer)

  const {wishlist}=useSelector((state)=>state.wishListReducer)

  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cartReducer)

const{id}=useParams()
// console.log(id);


useEffect(()=>{
 
const products=JSON.parse(localStorage.getItem("products"))
  setProduct(products?.find(product=>product?.id==id))
},[])

const handleWishlist=(product)=>{
  const existingProduct=wishlist.find(item=>item.id==product?.id)

  if(existingProduct){
    alert("product already exists")
  }else{
    dispatch(addToWishList(product))
  }
}

const handleCart=(product)=>{
  const existingProduct=cart?.find(item=>item.id==product.id)
  if(existingProduct){
   dispatch(addToCart(product))
    alert("items added") 
  }else{
    dispatch(addToCart(product))
    alert("items added successfully")
  }
}

// console.log(product);

  return (
    <>
   <Header/>
    
    <div className='mt-5'>
      {
        loading?<div className='mt-5 text-center fw-bolder'>
           <Spinner animation="border" variant="success" /> Loading...
        </div>:
        <div className='container row' style={{marginTop:"100px"}}>
        <div className='col-lg-4'>
          <img className='ms-5' style={{width:"100%",height:"400px"}} src={product?.thumbnail}/>
        </div>
        <div className='col-lg-2'></div>
        <div className='col-lg-6'>
  
          <p>{product?.id}</p>
          <h1>{product?.title}</h1>
          <h5 className='fw-bolder'>Price: <span style={{color:"red"}}>{product?.price}</span></h5>
          <p>{product?.description}</p>
          <div className='d-flex justify-content-between mt-4'>
  
          <Button variant="btn btn-outline-dark" onClick={()=>handleWishlist(product)}><i class="fa-solid fa-heart text-danger"></i></Button>
          <Button variant="btn btn-outline-light"  onClick={()=>handleCart(product)}><i class="fa-solid fa-cart-shopping text-warning"></i></Button>
          </div>
  
        </div>
        
      </div>
      }
    </div>

    </>
  )
}


export default View
