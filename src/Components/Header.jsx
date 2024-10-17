import React, { useEffect, useState } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { searchProduct } from '../Redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header(insideHome) {

  const dispatch=useDispatch()
const [wishlistCount,setWishlistCount]=useState(0)
const [cartCount,setCartCount]=useState(0)
  const {wishlist}=useSelector((state)=>state.wishListReducer)
  const cart=useSelector((state)=>state.cartReducer)


  useEffect(()=>{
    setWishlistCount(wishlist?.length)
    setCartCount(cart.length)
  },[wishlist,cart])

  return (
    <div>
       <Navbar expand="lg" className="bg-dark p-3">
      <Container>
        <Navbar.Brand className='text-white' href="#home"><img src='https://cdn.dribbble.com/users/252024/screenshots/2028221/addedtoyourcart.gif'width={"60px"}></img>   E-cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

{insideHome&&<Nav.Link>

            <input type='text' className='form-control rounded' style={{width:"500px"}} placeholder='search products' onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}/>

          </Nav.Link>}

        <Nav.Link>
          <Link to={'/wishlist'}><i class="fa-solid fa-heart text-danger"> Wishlist</i><Badge bg="success rounded ms-2 mt-3" >{wishlistCount}</Badge></Link></Nav.Link>
            <Nav.Link><Link to={'/cart'}><i class="fa-solid fa-cart-shopping text-warning"> Cart</i><Badge bg="success rounded ms-2 mt-3">{cartCount}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
