import React from 'react'
import "./stylesheet/genderShoes.css"

const GenderSoes = () => {
    const genders = [{
        name: "Men",
        image: "https://media.landmarkshops.in/cdn-cgi/image/h=739,w=499,q=85,fit=cover/max-new/1000013915662-Purple-WINE-1000013915662_01-2100.jpg"
    }, {
        name: "Women",
        image: "https://images.meesho.com/images/products/179515827/jiyoe_512.webp"
    }, {
        name: "Boy",
        image: "https://johnlewis.scene7.com/is/image/JohnLewis/008304130?"
    }, {
        name: "Girl",
        image: "https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/125/assets/FA235246_Tees_MOB.jpg"
    }]
    const category = [{
        image: "https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9320.jpg?auto=webp&quality=75&width=1024",
        name: "sneaker"
    },
        {
            image: "https://images.herzindagi.info/image/2023/Nov/Sports-Shoes.jpg",
            name: "sneaker"

        },
        {
            image: "https://toroblu.in/cdn/shop/files/Toro-Blu-Men-s-Lace-Up-Formal-Shoes-HNR-Corporation-1685977274_9b6a54a8-596e-4563-b017-f70df7dd16af_2048x2048.jpg?v=1685977293",
            name: "sneaker"

        }
    ]
    return (
        <div className='genderShoes'>
            <h3>All category</h3>
            <div className='genders'>
                {genders.map((item, index) => {
                    return <div className="genders-div">
                        <img src={item.image} alt="" />
                        <h1>{item.name}</h1>
                    </div>
                })}
            </div>
            <div className='shoe-category'>
                {category.map((item, index) => {
                    return <div className="category">
                        <img src={item.image} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                })}

            </div>

        </div>
    )
}

export default GenderSoes
