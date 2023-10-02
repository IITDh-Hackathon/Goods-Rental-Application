import React from 'react'
import { useState } from 'react'
import '../css/CartCardCss.css'

const CartCard = (props) => {
    const { title, price, image, handlePriceChange } = props;
    const [quantity, setQuantity] = useState(1);
    const [pricestate, setPricestate] = useState(price)
    const [Months, setMonths] = useState(1);
    const imageurl = process.env.REACT_APP_SERVER_URL + '/static/' + image;

    const handleMonthChange = (increase) => {
        if (increase) {
            setMonths(Months + 1);
            setPricestate(pricestate + price);
            handlePriceChange(true,price);
        } else {
            if (quantity > 1) {
                setMonths(Months - 1);
                setPricestate(pricestate - price);
                handlePriceChange(false,price);
            }
        }
    }
    
    const handleOnChange = (increase) => {
        if (increase) {
            setQuantity(quantity + 1);
            setPricestate(pricestate + price);
            handlePriceChange(true,price);
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
                setPricestate(pricestate - price);
                handlePriceChange(false,price);
            }
        }
    }

    return (
        <div className="cart-box">
            <img src= {imageurl}/>
            <div className="cart-content">
                <h3>{title}</h3>
                <h4>Price: ₹{pricestate}</h4>
                <p className="cart-unit">
                    Quantity:
                    <i className='fa fa-minus cart-btn'  onClick={()=>handleOnChange(false)}></i>
                    <span>{quantity}</span>
                    <i className='fa fa-plus cart-btn'  onClick={()=>handleOnChange(true)}></i>
                </p>
                <p>
                    Months:
                    <i className='fa fa-minus cart-btn'  onClick={()=>handleMonthChange(false)}></i>
                    <span>{Months}</span>
                    <i className='fa fa-plus cart-btn'  onClick={()=>handleMonthChange(true)}></i>
                    
                </p>
                <p className="cart-btn-area"><i aria-hidden="true" className="fa fa-trash"></i> <span className="btn2">Remove</span></p>
            </div>
        </div>
    )
}

export default CartCard