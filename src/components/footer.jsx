import React from 'react'
import "./stylesheet/footer.css"
import { CiSearch  } from "react-icons/ci";
import { IoAccessibilityOutline ,IoAccessibilitySharp,IoSearchOutline,IoSearchSharp     } from "react-icons/io5";
import { IoHomeOutline,IoHomeSharp,IoCartOutline,IoCartSharp   } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="home"><IoHomeOutline/></div>
      <div className="search-mobile"><IoSearchOutline /></div>
      <div className="cart"><IoCartOutline /></div>
      <div className="profile"><IoAccessibilityOutline   /></div>
    </div>
  )
}

export default Footer
