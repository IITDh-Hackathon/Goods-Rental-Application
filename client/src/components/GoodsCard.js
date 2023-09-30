import React from 'react'
import '../css/GoodsCardCss.css'

const GoodsCard = (props) => {
    // name: String, //name of the item to be rented
    // description: String,
    // price: Number,
    // quantity: Number,
    // image: String,
    // category: String,
    const { name, description, price, quantity, image, category } = props
    // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg"
    return (
        <>
            <div className="GoodsCard">
                <img src={image} alt='' />
                <div className="category">{category}</div>
                <div className='GoodsBody'>
                    <h3>{name}</h3>
                    <p>
                        {description}
                    </p><span href="/a">{price}</span>
                </div>
            </div>
        </>
    )
}

export default GoodsCard