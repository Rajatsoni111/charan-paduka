import React from 'react'
import "./stylesheet/firstpage.css"

const FirstPage = () => {
  let arr = [
  {
      shoename: 'adidas',
      Image: '../adidas.png',
  },
    {
      shoename: 'REBOOK',
      Image: '../adidshoes.png'
    },
    {
      shoename: 'NEWBALANCE',
      Image: '../newbalance.png',
    },
  ]
  return (
    <>
      <div className="firstpage">
        <div className='content-text'>
          <h2>The Future is here</h2>
        </div>
        {arr.map((item,index)=>{
          return   <div className='firstpage-div'>
          <div className='adidas'>
            <h2>{item.shoename}</h2>
            <h3>Fearlessly Independent Since 1906</h3>
            <p>this is the show you eant to buy so buy it foot comgkvi a jdgi ajjfoa djfa dfiae fjafa</p>
            <button>Show more</button>
          </div>
          <div className="content-img">
            {/* <img src="../adidas.png" alt="" /> */}
            {/* <img src="../newbalance.png"/> */}
            <img src={item.Image}/>
            <div className='shoe-circle'></div>
          </div>
        </div>
        })}
      </div>

      <div className='tagline'>
        <h1>BE STYLISH</h1>
        <h2>Give your feet the comfert they deserve</h2>
      </div>
    </>
  )
}

export default FirstPage
