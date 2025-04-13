import React from 'react'
import {ITEMS} from './item'
import "./stylesheet/genderShoes.css"
// import { NavLink } from 'react-router-dom'

const GenderSoes = (index) => {
    const followLink = () => {
        localStorage.setItem('index', index);
        window.open("/Detailproducts", "_blank");
      };
      const followLink2 = () => {
        window.open("/products", "_blank");
      };

    return (
        <div className='genderShoes'>
            {/* <h3>All category</h3> */}
            <div className='genders'>
                {ITEMS.map((item, index) => {
                    return <div className='gender-div' key={item.id} onClick={()=> followLink(index)}>
                    <img src={item.image} alt="" />
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <h2>price : {item.price} $</h2>
                </div>
                })}
            </div>
            <button className='show-more-button' onClick={followLink2}>show more</button>
            </div>
    )
}

export default GenderSoes
