import React, { useContext } from 'react'
import item from './item.json'
import "./stylesheet/product.css"
import Navbar from './navbar'
import { ThisSearch } from './navbar'


const Product = () => {
  let search = useContext(ThisSearch)
  return (
    <>
      <div className='product-div'>
        <Navbar />
        <div className='fliter'>
          susraaaaaaaaaaaaaa
        </div>
        <div className='product'>
          {
          item.filter((product) => {
            return search === '' ? product : product.name.toLowerCase()
            .includes(search.toLowerCase())
          })
          .map((product, index) => { 
            return <div className='product-item-div' key={index}>
              <img src={product.image} alt="" />
              <div className='product-div-text'>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h2>price : {product.price} $</h2>
              </div>
              {/* <div className='button-div'>
                <button>Add to Bag</button>
                <button>Buy Now</button>
              </div> */}
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Product