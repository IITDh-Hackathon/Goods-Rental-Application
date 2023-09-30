import React from "react";
import Goods from "./Goods";
import HomeCarousel from "./carousel.js";

const Home = () => {
  return (
    <>
    <HomeCarousel />
    <Goods category='Furniture' />
    </>
  )
}

export default Home;
