import React, { useContext } from 'react'
import { ITEMS } from './item'
import "./stylesheet/product.css"
// import Navbar from './navbar'
import { ContextProvide } from '../thisContext'


const Product = () => {
  const context = useContext(ContextProvide)
  return (
    <>
      <div className='product-div'>
        {/* <Navbar /> */}
        <div className='fliter'>
          <h1>Filter</h1>
          <div className="Brands-filter">
            <div className="brands-filter-brands">
              <h1>Brands</h1>
              <hr />
              <ul className='brands-ul'>
                <input type="checkbox" /><label>Pama</label><br />
                <input type="checkbox" /><label>Nike</label><br />
                <input type="checkbox" /><label>Adidas</label><br />
                <input type="checkbox" /><label>New Balance</label><br />
                <input type="checkbox" /><label>Levis</label><br />
                <input type="checkbox" /><label>Wrangler</label><br />
                <input type="checkbox" /><label>Lee</label><br />
              </ul>
            </div>
            <div className='brands-filter-colors'>
              <h1>colors</h1>
              <hr />
              <ul className='brands-ul'>
                <input type="checkbox" /><label>Red</label><br />
                <input type="checkbox" /><label>Blue</label><br />
                <input type="checkbox" /><label>Green</label><br />
                <input type="checkbox" /><label>Yellow</label><br />
                <input type="checkbox" /><label>Black</label><br />
                <input type="checkbox" /><label>White</label><br />
              </ul>
            </div>
            <div className="brand-fiter-price">
              <h1>Price</h1>
              <hr />
              <ul className='brands-ul'>
                <input type="checkbox" /><label>Low to High</label><br />
                <input type="checkbox" /><label>High to Low</label><br />
                </ul>
            </div>
            
          </div>
        </div>
        <div className='product'>
          {
            ITEMS.length > 0 && ITEMS.filter((product) => {
              return context.search === '' ? product : product.name.toLowerCase()
                .includes(String(context.search).toLowerCase());
              // return console.log(product.name.toLowerCase());
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
          {/* } */}
        </div>
      </div>
    </>
  )
}

export default Product