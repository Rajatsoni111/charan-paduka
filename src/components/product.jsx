import React from 'react'
import item from './item.json'
import "./stylesheet/genderShoes.css"

const Product = () => {
  return (
    <>
    <div className='product-div'>
    <div className='genders'>
    {item.map((item, index) => {
        return <div className='gender-div'>
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <h2>price : {item.price} $</h2>
        <button>show more</button>
    </div>
    })}
</div>
</div>
</>
  )
}

export default Product