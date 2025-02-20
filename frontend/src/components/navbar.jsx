import React, { useContext, useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import "./stylesheet/navbar.css"
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

import {ContextProvide} from '../thisContext';

const Navbar = () => {
  const {setSearch, search} = useContext(ContextProvide);

  const [open, setOpen] = useState("flex")
  const [close, setClose] = useState("none")
  const [right, setRight] = useState("-100%")
  const [top, setTop] = useState("-100%")
  // console.log(search)
  const handleOpen = () => {
    setOpen("none")
    setClose("flex")
    setRight("0")
    console.log("this is open")
  }
  const handleclose = () => {
    setOpen("flex")
    setClose("none")
    setRight("-100%")
    console.log("this is close")
  }
  const handleTop = () => {
    if (top === '-100%') {
      setTop('0%')
      console.log("this is close with 0")
    }
    else setTop('-100%')
    console.log(top)
  }

  const [prevScrollY, setPrevScrollY] = useState(0);
  // const prevScrollY = useRef(0);
  const [hideNavbar, setHideNavbar] = useState('0%');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        setHideNavbar('-100%');
      } else {
        setHideNavbar('0%');
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);


  return (
    <div className='navbar' style={{ top: hideNavbar }} >
      <h1>Charan paduka</h1>

      <div className='search'>
        {/* <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} /> */}
        <input type="text" placeholder='search' onChange={(e)=>{setSearch(e.target.value);console.log(search)}}/>
        <div className="icon"> <CiSearch /></div>
      </div>
      <ul style={{ right: right }}>

        <li>Home</li>
        <li>About us</li>
        <li>Items</li>
        <li>Contact us</li>
        <li><div className='desktop-cart' onClick={handleTop}><GrCart /></div></li>
        <li><div className='desktop-person'><FaUserCircle /></div></li>


      </ul>
      <div className='menu'>
        <div className="open" onClick={handleOpen} style={{ display: open }}>
          <CiMenuFries />
        </div>
        <div className="close" onClick={handleclose} style={{ display: close }}>
          <IoMdClose />
        </div>
      </div>
    </div>
  )

}

export default Navbar