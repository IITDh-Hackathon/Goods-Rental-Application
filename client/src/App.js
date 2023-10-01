import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import ApiState from "./context/api/ApiState";
import AdminHome from "./components/admin/AdminHome";
import AddGoods from "./components/admin/AddGoods";
import AddListingToCity from "./components/admin/AddListingToCity";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <ApiState>
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<AdminHome />} />
              <Route path="/admin/addgoods" element={<AddGoods />} />
              <Route path="/admin/addlisting" element={<AddListingToCity />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ApiState>
      <ToastContainer />
    </>
  );
}

export default App;
