import React from "react";
import HomeCarousel from "./carousel.js";
import Categories from "./Categories";
import { Navigate } from "react-router-dom";
import ApiContext from "../context/api/ApiContext.js";
import Footer from "./footer.js";
const Home = () => {
  const context = React.useContext(ApiContext);
  const { profile, loginStatus } = context;
  if(profile && profile.role === "admin"){
    return <Navigate to="/admin" />
  }
  return (
    <>
    <HomeCarousel />
    <Categories />
    <Footer />
    </>
  )
}

export default Home;
