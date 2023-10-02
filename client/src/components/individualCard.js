import React, { useState,useContext } from "react";
import { toast } from "react-toastify";
import Carousel from "react-bootstrap/Carousel";
import Box from "@mui/material/Box";
import "./../css/individualCard.css";
import ApiContext from "../context/api/ApiContext";

const IndividualCard = ({ id,title, description, unitPrice, images }) => {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(1);
  const { addToCart, city } = useContext(ApiContext);

  const handleAddtoCart = async () => {
    console.log(id);
    console.log(city);
    if (city === null) return toast.error("Please Select City");
    const res = await addToCart(id, city, quantity, duration);
    const [response, error] = res || [null, true];
    if (error) {
      toast.error(response.message);
    } else {
      toast.success("Item Added to Cart Successfully");
    }
  };


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleDurationChange = (change) => {
    setDuration(Math.max(1, duration + change));
  };
  const imageStore = process.env.REACT_APP_SERVER_URL + "/static/";

  return (
    <Box className="cardBox">
      <div className="img_carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.map((image) => (
            <Carousel.Item>
              <img src={imageStore + image} alt="First slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="cardInfo">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>₹ {unitPrice}</p>

        <div>
          <span>Quantity: </span>
          <button
            className="arithmetic"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="arithmetic"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <div>
          <span>Duration: </span>
          <button
            className="arithmetic"
            onClick={() => handleDurationChange(-1)}
          >
            -
          </button>
          <span> {duration} </span>
          <button
            className="arithmetic"
            onClick={() => handleDurationChange(1)}
          >
            +
          </button>
        </div>
        <button className="add_to_cart" onClick={handleAddtoCart} >Add to Cart</button>
      </div>
    </Box>
  );
};

export default IndividualCard;
