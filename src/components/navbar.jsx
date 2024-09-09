import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import "./stylesheet/navbar.css"
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline,IoCartSharp   } from "react-icons/io5";


const Navbar = () => {
  const [open , setOpen] = useState("flex")
  const [close , setClose] = useState("none")
  const [right , setRight] = useState("-100%")

  const handleOpen = () =>{
    setOpen("none")
    setClose("flex")
    setRight("0")
    console.log("this is open")
  }
  const handleclose = () =>{
    setOpen("flex")
    setClose("none")
    setRight("-100%")
    console.log("this is close")
  }
  

  return (
    <div >
      <div className='navbar'>
        <h1>Charan paduka</h1>

        <ul style={{right:right}}>
          <li>Home</li>
          <li>About us</li>
          <li>Pricing</li>
          <li>Contact us</li>
          <li><div className='desktop-cart'><IoCartOutline/></div></li>
          <div className='search'>
            <input type="text" placeholder='search' />
            <div className="icon"> <CiSearch /></div>
          </div>
        </ul>
        <div className='menu'>
          <div className="open" onClick={handleOpen} style={{display:open}}>
            <CiMenuFries  />
          </div>
          <div className="close" onClick={handleclose} style={{display:close}}>
            <IoMdClose />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
