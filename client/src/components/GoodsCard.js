import React from 'react'
import '../css/GoodsCardCss.css'

const GoodsCard = (props) => {
    // name: String, //name of the item to be rented
    // description: String,
    // price: Number,
    // quantity: Number,
    // image: String,
    // category: String,
    const imageStore = 'http://localhost:8000/static/'
    let { name, description, price, quantity, images, category,message } = props
    let image;
    if(!images){
        image = "https://cdn1.iconfinder.com/data/icons/image-manipulations/100/13-512.png";
    }
    else{
        image = imageStore + images[0];
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