import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Box from "@mui/material/Box";
import "./../css/individualCard.css";
import ExampleCarouselImage1 from "./../images/carousel1.jpeg";
import ExampleCarouselImage2 from "./../images/carousel2.jpeg";

const IndividualCard = ({ title, description, unitPrice }) => {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleDurationChange = (change) => {
    setDuration(Math.max(1, duration + change));
  };

  return (
    <Box className="cardBox">
      <div className="img_carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={ExampleCarouselImage1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={ExampleCarouselImage2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="cardInfo">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{unitPrice}</p>

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
        <button className="add_to_cart">Add to Cart</button>
      </div>
    </Box>
  );
};

export default IndividualCard;
