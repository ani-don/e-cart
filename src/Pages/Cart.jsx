import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/slice/cartSlice'
import Header from '../Components/Header'


function Cart() {

  const cart=useSelector((state)=>state.cartReducer)
const dispatch=useDispatch()
const[total,setTotal]=useState(0)

useEffect(()=>{
  if(cart?.length>0){

setTotal(cart?.map(product=>product.totalprice).reduce((p1,p2)=>p1+p2))
  }else{
    setTotal(0)
  }
},[cart])




  return (
    <>
    <Header/>
    <div className='container'style={{marginTop:"50px"}}>
{

  cart?.length>0?
      <div className='row mt-5'>
        <div className='col-lg-8'>
<table className='table shadow'>
  <thead>
    <tr>
      <th>#</th>
      <th>title</th>
      <th>image</th>
      <th>quantity</th>
      <th>price</th>
     
      <th>action</th>
    </tr>
  
  </thead>
<tbody>


{cart?.map((product,index)=>(


<tr>
<td>{index+1}</td>
<td>{product?.title}</td>
<td><img style={{width:"300px",height:"300px"}} src={product?.thumbnail}/></td>
<td><input style={{width:"20px"}} type="text" value={product?.quantity} readOnly/></td>
<td className='text-danger'>${product?.totalprice}</td>
<td><button className='btn' onClick={()=>dispatch(removeFromCart(product?.id))}><i class="fa-solid fa-trash text-danger" ></i></button></td>
</tr>

))}

 
</tbody>

</table>

<div className='d-flex justify-content-between'>
  <button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>Empty cart</button>
  <Link to={'/'} className='btn btn-success'>Shop-more</Link>
</div>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-3'>

          <div className='container border rounded shadow mt-5 p-5 w-100'>
            <h1>cart summary</h1>
            <h4>total products:{cart?.length}</h4>
            <h5>total: <span className='text-danger fw-bolder'>${total}</span></h5>
          </div>
<div className='d-grid'>
  <button className='btn btn-success m-3-rounded'>checkout</button>
</div>
        </div>
      </div>:<div className='d-flex align-items-center mt-5 ms-5'>
          <img width={"450px"}  src='https://www.herbsandmore.shop/img/Cart.gif'/>
          <h1 className='text-success'>your cart is empty....</h1>
        </div>
      }
      
    </div>
    </>
  )
}

export default Cart
