import React from "react";
import { useState, useContext, useEffect } from "react";
import ApiContext from "../context/api/ApiContext";
import CartCard from "./CartCard";
import "../css/CartCss.css";
import { toast } from "react-toastify";

const Cart = () => {
  // const [totalprice, setTotalprice] = useState(0)
  // const [totalquantity, setTotalquantity] = useState(0)
  const { getCartItems, cartitems, handlePriceChange, totalprice } =
    useContext(ApiContext);

  useEffect(() => {
    console.log("hi");
    getCartItems().then((res) => {
      const [response, error] = res || [null, true];
      // make a for loop to calculate total price and quantity
      if (error) {
        toast.error(response.response.data.message);
      }
    });
  }, []);

  return (
    <div className="cart-wrapper">
      <h1>Shopping Cart</h1>
      <div className="cart-project">
        <div className="cart-shop">
          <CartCard
            title="hi"
            price={40}
            handlePriceChange={handlePriceChange}
            key="hi"
          />
          <CartCard
            title="Chair"
            price={20}
            handlePriceChange={handlePriceChange}
          />
          <CartCard
            title="Bed"
            price={30}
            handlePriceChange={handlePriceChange}
          />
          <CartCard
            title="hi"
            price={50}
            handlePriceChange={handlePriceChange}
          />
          <CartCard
            title="hi"
            price={40}
            handlePriceChange={handlePriceChange}
          />
        </div>
        <div className="right-bar">
          <p>
            <span>Subtotal</span> <span>{totalprice}</span>
          </p>
          <hr />
          <p>
            <span>Tax (5%)</span> <span>$6</span>
          </p>
          <hr />
          <p>
            <span>Shipping</span> <span>$15</span>
          </p>
          <hr />
          <p>
            <span>Total</span> <span>$141</span>
          </p>
          <a href="/checkout">
            <i className="fa fa-shopping-cart"></i>Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
