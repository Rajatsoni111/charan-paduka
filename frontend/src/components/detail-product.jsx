import React, { useEffect, useState } from 'react'
import './stylesheet/detalproduct.css'
import { ITEMS } from './item'

const Detailproduct = () => {

    return (
        <div className='Detailproducts'>
            {ITEMS.map((item, index) => {
                
                 {/* {selectedItem ? ( <div className='detail'> */}
                return <div className='detail'>
                    <div className='detail-prodect-image'>
                        <img src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/gorfwjchoasrrzr1fggt/AIR+MAX+270.png" alt="" />
                    </div>
                    <div className='detail-product-info'>
                        <h1>name</h1>
                        <p>description</p>
                        <hr />
                        <h2> 200 rs</h2>
                        <h3>rating</h3>
                        <div className='detail-product-buttons'>
                            <button className='buy-button'>Buy Now</button>
                            <button className='Add-button'>Add to Bag</button>
                        </div>
                    </div>
                </div> 
                // ):(<h1>Item not found</h1>)}
            })}
        </div>
    )
}

export default Detailproduct