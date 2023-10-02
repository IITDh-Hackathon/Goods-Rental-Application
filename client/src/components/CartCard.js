import { useState, useContext } from 'react'
import '../css/CartCardCss.css'
import ApiContext from "../context/api/ApiContext.js";



const CartCard = (props) => {
    const context = useContext(ApiContext);
    const { getCartItems, updateCartItemQuantity, updateCartItemMonths, removeCartItem } = context;
    const { title, price, image, handlePriceChange, id, months, quantity, city, open, setOpen } = props

    let pricestate = price * months * quantity;

    const imageurl = process.env.REACT_APP_SERVER_URL + '/static/' + image;

    const handleMonthChange = (increase) => {
        setOpen(true);
        if (increase) {
            updateCartItemMonths(id, months + 1,setOpen);
        } else {
            if (months > 1) {
                updateCartItemMonths(id, months - 1, setOpen);
            }else{
                setOpen(false);
            }
        }
    }

    const handleOnChange = (increase) => {
        setOpen(true);
        if (increase) {
            updateCartItemQuantity(id, quantity + 1, setOpen);
        } else {
            if (quantity > 1) {
                updateCartItemQuantity(id, quantity - 1, setOpen);
            }else{
                setOpen(false);
            }
        }
    }

    const handleOnDelete = () => {
        setOpen(true);
        removeCartItem(id).then((res) => {
            setOpen(false);
        }
        );
        getCartItems();
    }

    return (
        <div className="cart-box">
            <img src={imageurl} />
            <div className="cart-content">
                <div className="cart-title-1">
                    <h3>{title}</h3>
                    <h5>{city}</h5>
                </div>
                <hr style={{margin:"5px 0px"}} />
                <h4>Price: ₹{pricestate}</h4>
                <p className="cart-unit">
                    Quantity:
                    <i className='fa fa-minus cart-btn' onClick={() => handleOnChange(false)}></i>
                    <span>{quantity}</span>
                    <i className='fa fa-plus cart-btn' onClick={() => handleOnChange(true)}></i>
                </p>
                <p>
                    Months:
                    <i className='fa fa-minus cart-btn' onClick={() => handleMonthChange(false)}></i>
                    <span>{months}</span>
                    <i className='fa fa-plus cart-btn' onClick={() => handleMonthChange(true)}></i>

                </p>
                <p className="cart-btn-area" onClick={handleOnDelete}><i aria-hidden="true" className="fa fa-trash"></i> <span className="btn2"></span></p>
            </div>
        </div>
    )
}

export default CartCard