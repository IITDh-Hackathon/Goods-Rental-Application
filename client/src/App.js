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

function App() {
  const [city, setCity] = useState("");
  return (
    <>
      <ApiState>
        <BrowserRouter>
          <Navbar city={city} setCity={setCity} />
          <div className="content">
            <Routes>
              <Route path="/individualcard" element={<IndividualCard />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminHome />} />
              <Route path="/admin/addgoods" element={<AddGoods />} />
              <Route path="/admin/addlisting" element={<AddListingToCity />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ApiState>
      <ToastContainer />
    </>
  );
}

export default App;
