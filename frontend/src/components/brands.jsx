import React, { useEffect, useState } from 'react'
import './stylesheet/brands.css'
import {ITEMS} from './item'

const Brands = () => {

    const [crousel, setCrousel] = useState(0)
    const [ifPause, setIfPause] = useState(false)


    useEffect(() => {
        if (!ifPause) {  
            const interval = setInterval(() => {
                setCrousel((previewind) => (previewind + 1) % ITEMS.length)
            }, 3000);
            return () => clearInterval(interval)
        }
    })


    return (
        <div className='Brands'>
            <h1>Our New Launches</h1>
            <div className='crausel-container'>
                {ITEMS.map((item, index) => {
                    return <div className='crausel' key={index} style={{
                        display: crousel === index ? "flex" : "none",
                        transition: 0.5,}}
                        onMouseEnter={() => setIfPause(true)}
                        onMouseLeave={() => setIfPause(false)}>
                        <div className='crausel-shoe-detail'>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <span>40% OFF</span>
                        </div>
                        <div className='crousel-shoe-img'>
                            <div className='crousel-cir'></div>
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Brands