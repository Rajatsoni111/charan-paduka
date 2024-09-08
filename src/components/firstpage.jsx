import React from 'react'
import "./stylesheet/firstpage.css"

const FirstPage = () => {
  return (
    <div className='firstpage'>
      <div className='content-text'>
        <h2>The</h2>
        <h1>Future</h1>
        <h2>Is here</h2>
      </div>
      <div className="content-img">
        <img src="../shoes.png" alt="" />
      </div>
    </div>
  )
}

export default FirstPage
