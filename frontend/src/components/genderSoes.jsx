import React from 'react'
import {ITEMS} from './item'
import "./stylesheet/genderShoes.css"
// import { NavLink } from 'react-router-dom'

const GenderSoes = () => {
    const followLink = () => {
        window.open("/products", "_blank");
      };

    return (
        <div className='genderShoes'>
            {/* <h3>All category</h3> */}
            <div className='genders'>
                {ITEMS.map((item, index) => {
                    return <div className='gender-div' key={index}>
                    <img src={item.image} alt="" />
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <h2>price : {item.price} $</h2>
                   <button onClick={followLink}>show more</button>
                </div>
                })}
            </div>
        </div>
    )
}

export default GenderSoes
