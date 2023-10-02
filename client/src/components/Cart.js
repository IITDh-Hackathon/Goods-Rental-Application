import React from 'react'
import { useState, useContext, useEffect } from 'react'
import ApiContext from '../context/api/ApiContext'
import CartCard from './CartCard'
import '../css/CartCss.css'
import { toast } from 'react-toastify';

const Cart = () => {
	// const [totalprice, setTotalprice] = useState(0)
	// const [totalquantity, setTotalquantity] = useState(0)
	const {cartitems, getCartItems, handlePriceChange, totalprice } = useContext(ApiContext);

	useEffect(() => {
		getCartItems();
	}
	,[])
	

	return (
		<div className="cart-wrapper">
			<h1>Shopping Cart</h1>
			<div className="cart-project">
				<div className="cart-shop">
				{cartitems.map((cartItem) => (
					<CartCard key={cartItem.id} title={cartItem.item.name} price={cartItem.item.price} image={cartItem.item.images[0]} handlePriceChange={handlePriceChange} />
				))
				}
				</div>
				<div className="right-bar">
					<p><span>Subtotal</span> <span>{totalprice}</span></p>
					<hr />
					<p><span>Tax (5%)</span> <span> {totalprice * 0.05}</span></p>
					<hr />
					<p><span>Shipping</span> <span>₹15</span></p>
					<hr />
					<p><span>Total</span> <span>₹{totalprice + totalprice * 0.05 + 15}</span></p><a href="#"><i className="fa fa-shopping-cart"></i>Checkout</a>

				</div>
			</div>
		</div>
	)
}

export default Cart