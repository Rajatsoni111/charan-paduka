import React, { useEffect, useState } from 'react'
import "./stylesheet/firstpage.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { use } from 'react'
import Brands from './brands';
import Footer from './footer';
import GenderSoes from './genderSoes';
import Cart from './cart';
import Login from './login';
import Navbar from './navbar';

const FirstPage = () => {
  gsap.registerPlugin(ScrollTrigger)

  let [background, setBackground] = useState('#4d50ab')
  let [background2, setBackground2] = useState('#8f9196')

  let [adidas, setAdidas] = useState('0')
  let [nb, setNb] = useState('-100%')
  let [nike, setNike] = useState('-100%')

  let [disadidas, setDisAdidas] = useState('flex')
  let [disnb, setDisNb] = useState('none')
  let [dissnike, setDisNike] = useState('none')

  const setBG = (arg) => {

    if (arg === 1) {
      setBackground('#4d50ab')
      setBackground2('#8f9196')
      setAdidas('0%')
      setNb('-100%')
      setNike('-100%')
      setDisAdidas('flex')
      setDisNb('none')
      setDisNike('none')
    }
    if (arg === 2) {
      setBackground('#800000')
      setBackground2('#DAD4B5')
      setAdidas('-100%')
      setNb('0%')
      setNike('-100%')
      setDisAdidas('none')
      setDisNb('flex')
      setDisNike('none')
    }
    if (arg === 3) {
      setBackground('#874CCC')
      setBackground2('white')
      setAdidas('-100%')
      setNb('-100%')
      setNike('0%')
      setDisAdidas('none')
      setDisNb('none')
      setDisNike('flex')
    }
  }
//for first-div page
// useGSAP = () => {
  useEffect(() => {
  gsap.to(".firstpage-div",{
    y:0,
    duration:1,
    delay:3.5,
  })

  gsap.to(".shoes-dis",{
    x:0,
    duration:.5,
    delay:4,
  })})

    useEffect(() => {
      gsap.to(".tagline-h1", {
          x: 0,
          opacity:1,
          duration: 1.5,
          //    transition:1,
          stagger: 0.2,
          ease: 'power4.inOut',
      })
  })
  return (
    <>
      <Navbar />
      {/* <FirstPage /> */}

      <div className="firstpage" style={{ background: background2 }}>
        {/* <div className='content-text'>
          <h2 style={{color:background}}>The Future is here</h2>
        </div> */}
        <div className='firstpage-div' style={{ background: background }}>
          <div className='shoes-dis'>
            <div className="for-adidas " style={{ display: disadidas, color: '#DAD4B5' }}>
              <h1>ADIDAS</h1>
              <h3>Impossible is nothing</h3>
              <p>Adidas shoes offer comfort, style, and performance, featuring Boost cushioning for energy return, Primeknit uppers for a snug fit, and durable Continental outsoles.</p>
              <button style={{ background: background2 }}>Show more</button>
            </div>
            <div className="for-nb " style={{ display: disnb, color: '#DAD4B5' }}>
              <h1 style={{ bottom: '-100%' }}>NEW BALANCE</h1>
              <h3>Fearlessly Independent Since 1906</h3>
              <p>New Balance shoes are known for their comfort, support, and durability. Featuring cushioned midsoles, breathable uppers, and a variety of sizes and widths, they offer a perfect fit for all</p>
              <button style={{ background: background2 }}>Show more</button>
            </div>
            <div className="for-nb " style={{ display: dissnike, color: '#DAD4B5' }}>
              <h1 style={{ bottom: '-100%' }}>NIKE</h1>
              <h3>Just Do It</h3>
              <p>Energetic cushioning from two Air Zoom units plus a flexible tailgate for an easy step-in and step-out motion means you can own a run, without the hassle.</p>
              <button style={{ background: background2 }}>Show more</button>
            </div>
          </div>
          <div className="content-img">
            <div className='adidas' style={{ right: adidas }}>
              <img src="../adidas.png" alt="" />
            </div>
            <div className='nb' style={{ right: nb }}>
              <img src="../newbalance.png" />
            </div>
            <div className='nike' style={{ right: nike }}>
              <img src='../nike.png' />
            </div>
            {/* <div className='shoe-circle'></div> */}
          </div>
        
        <div className='change-button'>
          <div className='shoe-button' style={{ background: '#4d50ab' }} onClick={() => setBG(1)}>
            <img src="../adidas.png" alt="" />
          </div>
          <div className='shoe-button' style={{ background: "#800000" }} onClick={() => setBG(2)}>
            <img src="../newbalance.png" alt="" />
          </div><div className='shoe-button' style={{ background: "#874CCC" }} onClick={() => setBG(3)}>
            <img src="../nike.png" alt="" />
          </div>
        </div>
        </div>
      </div>

      <div className='tagline'>
        <div className='tagline-div'>
          {'Be stylish'.split('').map((letter, index) => {
          return <h1 className='tagline-h1' key={index} >{letter}</h1>
        })}
          {/* {["Be Stylish"].slice("").map((item, index) => {
            return <div className='tagline-h1' key={index}><h1 className='name-1-p'>{item}</h1></div>
          })} */}
        </div>
        <h2>Give your feet the comfert they deserve</h2>
      </div>




      <Cart />
      <Login />
      <GenderSoes />
      <Brands />
      <Footer />
    </>
  )
}

export default FirstPage
