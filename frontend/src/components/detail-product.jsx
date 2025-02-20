import React from 'react'
import './stylesheet/detalproduct.css'

const Detailproduct = () => {
    return (
        <div className='Detailproducts'>
            <div className='detail'>
                <div className='detail-prodect-image'>
                    <img src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/gorfwjchoasrrzr1fggt/AIR+MAX+270.png" alt="" />
                </div>
                <div className='detail-product-info'>
                    <h1>Adidas</h1>
                    <p>description</p>
                    <h2> 200 rs</h2>
                    <h3>rating</h3>
                    <div className='detail-product-buttons'>
                        <button className='buy-button'>Buy Now</button>
                        <button className='Add-button'>ADD to BAG</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Detailproduct