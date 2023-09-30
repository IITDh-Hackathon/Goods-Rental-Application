import { Link } from "react-router-dom";
import * as React from "react";
import "./../css/navBar.css";
import { Button } from "bootstrap";

const CityLogos = ({ name, url, setCity, handleClose }) => {
  const hadleClick = () => {
    setCity(name);
    handleClose();
  };

  return (
    <li onClick={hadleClick}>
      <div>
        <img src={url} alt={name} />
      </div>
      <span>{name}</span>
    </li>
  );
};

export default CityLogos;
