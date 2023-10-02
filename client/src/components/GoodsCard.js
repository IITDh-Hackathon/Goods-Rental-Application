import React from "react";
import "../css/GoodsCardCss.css";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import ApiContext from "./../context/api/ApiContext";
import Modal from "@mui/material/Modal";
import IndividualCard from "./individualCard";
import { useNavigate } from "react-router-dom";

const GoodsCard = (props) => {
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const { addCityListing, addToCart, city, removeCityListing } = useContext(ApiContext);
  const imageStore = process.env.REACT_APP_SERVER_URL + "/static/";
  let {
    name,
    description,
    price,
    quantity,
    images,
    category,
    message,
    id,
    handleCount,
  } = props;
  let image;
  if (!images) {
    image =
      "https://cdn1.iconfinder.com/data/icons/image-manipulations/100/13-512.png";
  } else {
    image = imageStore + images[0];
  }

  const handleOnSubmit = async (city, id) => {
    if (message === "addItem") {
      if (city === null) return toast.error("Please Select City");
      const res = await addCityListing(city, id);
      const [response, error] = res || [null, true];
      if (error) {
        toast.error(response.message);
      } else {
        toast.success("Item Added to City Listing Successfully");
        handleCount();
      }
    } else if (message === "Add to cart") {
      if (city === null) return toast.error("Please Select City");
      const res = await addToCart(id, city);
      const [response, error] = res || [null, true];
      if (error) {
        toast.error(response.message);
      } else {
        toast.success("Item Added to Cart Successfully");
      }
    } else if (message === "RemoveItem") {
      if (city === null) return toast.error("Please Select City");
      const res = await removeCityListing(id, city);
      const [response, error] = res || [null, true];
      if (error) {
        toast.error(response.message);
      } else {
        toast.success("Item Removed from Cart Successfully");
        handleCount();
      }
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <IndividualCard
          title={props.name}
          description={props.description}
          unitPrice={props.price}
          images={props.images}
          id={props.id}
        />
      </Modal>
      <div className="GoodsCard" >
        <div onClick={handleOpen} className="GoodsCard-top">
          <img src={image} alt="" />
          <div className="category">{category}</div>
          <div className="GoodsBody">
            <p>
              <h2 className="goods-name">{name}</h2>
              <h3 className="goods-price">₹ {price}</h3>
              {description.length > 50
                ? description.substring(0, 60) + "..."
                : description}
            </p>
          </div>
        </div>
        <span
          className="message"
          style={{ backgroundColor: message === "RemoveItem" ? "red" : ""}}
          onClick={() => {
            handleOnSubmit(city, id);
          }}
        >
          {message}
        </span>
      </div>
    </>
  );
};

export default GoodsCard;
