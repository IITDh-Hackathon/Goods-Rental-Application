import React from "react";
import Goods from "./Goods";
import HomeCarousel from "./carousel.js";

const Home = () => {
  return (
    <>
    <div>Homejs</div>
    <HomeCarousel />
    <Goods category='Furniture' />
    </>
  )
}

export default Home;
