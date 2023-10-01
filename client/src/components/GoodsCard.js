import React from 'react'
import '../css/GoodsCardCss.css'

const GoodsCard = (props) => {
    // name: String, //name of the item to be rented
    // description: String,
    // price: Number,
    // quantity: Number,
    // image: String,
    // category: String,
    
    let { name, description, price, quantity, image, category,message } = props
    if(!image){
           image = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg";
    }
    return (
        <>
            <div className="GoodsCard">
                <img src={image} alt='' />
                <div className="category">{category}</div>
                <div className='GoodsBody'>
                    <p>
                        <h2 className='goods-name'>
                            {name}
                        </h2>
                        <h3 className='goods-price'>
                        ₹ {price}
                        </h3>
                        {description}
                    </p><span className='message' >{message}</span>
                </div>
            </div>
        </>
    )
}

export default GoodsCard