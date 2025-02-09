import React, { useState } from 'react'
import "./stylesheet/footer.css"
import { CiSearch  } from "react-icons/ci";
import { IoAccessibilityOutline ,IoAccessibilitySharp,IoSearchOutline,IoSearchSharp     } from "react-icons/io5";
import { IoHomeOutline,IoHomeSharp,IoCartOutline,IoCartSharp   } from "react-icons/io5";


const Footer = () => {

  const [home, setHome ] = useState(true)
  const [search, setSearch ] = useState(true)
  const [cart , SetCart]  = useState(true)
  const [user, setUser ] = useState(true)

  const handleHome = () =>{
    if (home == true)
      {  setHome(false) 
        setSearch(true)
         setUser(true) 
         SetCart(true)
        }
      else setHome(true)
  }
  const handleCart = () =>{
    if (cart == true)
      {  setHome(true) 
        setSearch(true)
         setUser(true) 
         SetCart(false)
        }
      else setHome(true)
  }
   const handleSearch = () =>{
    if (search == true)
      {  setHome(true) 
        setSearch(false)
         setUser(true) 
         SetCart(true)
        }
      else setSearch(true)
  }
   const handleUser = () =>{
    if (user == true)
      {  setHome(true) 
        setSearch(true)
         setUser(false) 
         SetCart(true)
        }
      else setUser(true)
  }

  return (
    <div className='footer'>
      <div className="home">
        {home ?  <IoHomeOutline onClick={handleHome} style={{position:"absolute"}}/>:
        <IoHomeSharp onClick={handleHome} style={{display:home}}/>
      }
       
        </div>
      <div className="search-mobile">
      {search ?  <IoSearchOutline onClick={handleSearch} style={{position:"absolute"}}/>:
        <IoSearchSharp onClick={handleSearch} style={{display:search}}/>}
      </div>
      <div className="cart">
       {cart ? <IoCartOutline onClick={handleCart} style={{position:"absolute"}}/>:
      <IoCartSharp onClick={handleCart} style={{display:cart}}/>}
      </div>
      <div className="profile">
      {user ?  <IoAccessibilityOutline onClick={handleUser} style={{position:"absolute"}}/>:
        <IoAccessibilitySharp onClick={handleUser} style={{display:user}}/>}
        </div>
    </div>
  )
}

export default Footer
