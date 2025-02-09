import React from 'react'
import "./stylesheet/brands.css"
import Slider from "react-slick";


const Brands = () => {
    let data = [{
        name: "Nike",
        image: "../shoes.png"
    },
    {name: "New Balance",
        image: "../newbalance.png"
    },
    {
        name: "Adidas",
        image: "../adidas.png"
    },{
        name: "Reebok",
        image: "../rebook.png"
    }]

    return (
        <div className='brands'>
            <div className='brands-showcase'>
            {data.map((item ,index)=>{
                return <div key={index} className="nike">
                <h1>{item.name}</h1>
                <img src={item.image} alt="" />
            </div>
            })}
                </div>
                {/* <div className="nike">
                    <h1>Nike</h1>
                    <img src="../shoes.png" alt="" />
                </div> */}
        </div>
    )
}

export default Brands
