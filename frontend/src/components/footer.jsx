import React, { useState } from 'react'
import "./stylesheet/footer.css"
import { CiSearch } from "react-icons/ci";
import { IoAccessibilityOutline, IoAccessibilitySharp, IoSearchOutline, IoSearchSharp } from "react-icons/io5";
import { IoHomeOutline, IoHomeSharp, IoCartOutline, IoCartSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";


const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-div-1'>
        <ul className='footer-list-1'>
          <li>About</li>
          <li>Contact us</li>
          <li>Track order</li>
        </ul>

        <ul className='footer-list-2'>
          <li>Email:- charanpaduka@gamil.com</li>
          <li>Reach us at:- +91 0000000000</li>
        </ul>
      </div>

      <div className='footer-div-2'>
        <ul className='footer-list-1'>
          <li>Return Policy</li>
          <li>Shipping Policy</li>
          <li>Privacy Policy</li>

        </ul>
        <ul className='footer-list-1'>
          <input type="text" placeholder='Your email' />
          <div className='copyright'>
          <FaRegCopyright/> 
          <h3>2025, Charanpaduka</h3>
          </div>
        </ul>
      </div>
    </div>

  )
}

export default Footer
