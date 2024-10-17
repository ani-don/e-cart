import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slice/wishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'
import Header from '../Components/Header'



function Wishlist() {
const dispatch=useDispatch()
  const {wishlist}=useSelector((state)=>state.wishListReducer)

const handleCart=(product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromWishlist(product.id))
}



  return (
    <>
    <Header/>
    <div style={{marginTop:"70px", margin:"2rem"}}>
      <Row className='mt-5 container'>
       { 
        wishlist?.length>0?wishlist.map(products=>(


          <Col className='mt-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '18rem' }}>
    <Link to={`/view/${products.id}`}><Card.Img variant="top" style={{width:"100%"}} src={products.thumbnail} /></Link>
      <Card.Body>
        <Card.Title>{products.title.slice(0,20)}</Card.Title>
      
<div className='d-flex justify-content-between'>

        <Button variant="btn btn-light" onClick={()=>dispatch(removeFromWishlist(products.id))}><i class="fa-solid fa-trash text-danger"></i></Button>
        <Button variant="btn btn-light" onClick={()=>handleCart(product)}><i class="fa-solid fa-cart-shopping text-warning"></i></Button>
        </div>
      </Card.Body>
    </Card>
        </Col>
        )):<div className='d-flex align-items-center mt-5 ms-5'>
          <img width={"450px"}  src='https://www.herbsandmore.shop/img/Cart.gif'/>
          <h1 className='text-success'>your wishlist is empty....</h1>
        </div>
        
        
        }
      </Row>
      
    </div>
    </>
  )
}

export default Wishlist
