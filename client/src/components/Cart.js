import React from "react";
import { useState, useContext, useEffect } from "react";
import ApiContext from "../context/api/ApiContext";
import CartCard from "./CartCard";
import "../css/CartCss.css";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const Cart = () => {
	// const [totalprice, setTotalprice] = useState(0)
	// const [totalquantity, setTotalquantity] = useState(0)
	const {cartitems, getCartItems} = useContext(ApiContext);

  useEffect(() => {
    getCartItems();
  }, []);

  let totalprice = 0;
  if(cartitems){
	for (let i = 0; i < cartitems.length; i++) {
		totalprice += cartitems[i].item.price * cartitems[i].quantity * cartitems[i].months;
	}
}
  

	return (
		<div className="cart-wrapper">
			<h1>Shopping Cart</h1>
			<div className="cart-project">
				{cartitems.length !==0 ? 
				(<>
					<div className="cart-shop">
					{cartitems.map((cartItem) => (
						<CartCard key={cartItem.id} title={cartItem.item.name} price={cartItem.item.price} image={cartItem.item.images[0]} id={cartItem.id} quantity={cartItem.quantity} months={cartItem.months} city={cartItem.city} />
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
					<p><span>Total</span> <span>₹{totalprice + totalprice * 0.05 + 15}</span></p>
					<NavLink to={"/checkout"}> <i className="fa fa-shopping-cart"></i> Checkout </NavLink>
        		</div>
				</>
				):(
				<p className="cart-empty-img">
					<img src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt="" />
				</p>
				)
				}
      </div>
    </div>
  );
};
export default Cart;
