import React, { useEffect } from 'react'
import "./stylesheet/landingpage.css"
import {gsap} from "gsap"

const LandingPage = () => {
  
  useEffect(()=>{
    gsap.to('.name',{
      y:0,
      opacity:1,
      delay:0,
      duration:0.5,
      stagger:0.1,
      // repeat:Infinity,
      ease:'power4.inOut'
    })
    gsap.to('.LandingPage',{
      y:"-100%",
      delay:0,
      delay:3,
      duration:1,
      stagger:0.1,
      ease:'power4.inOut'
    })
  // document.body.style.overflow = 'hidden'
  })
  return (
    <div className='LandingPage'>
        <h2>Welcome to </h2>
        <div className='name-div'>
          {' Charan paduka'.split('').map((item,index)=>{
            return    <h1 className='name'>{item}</h1>
          })}
        </div>
    </div>
  )
}

export default LandingPage
