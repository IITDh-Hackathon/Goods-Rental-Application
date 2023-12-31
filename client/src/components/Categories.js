import React from "react";
import "../css/CategoriesCss.css";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

const Categories = () => {
  const [Categories, setCategories] = useState([
    [
      "Baskets",
      "https://www.ikea.com/images/93/7f/937f022b5ff3ff7c0a669711922e0a4f.png?f=xxs",
    ],
    ["Automobile", `${process.env.REACT_APP_SERVER_URL}/static/auto.jpg`],
    [
      "Cleaning Accessories",
      "https://www.ikea.com/images/96/8e/968e22928aa8e4698a45d8b502117b89.jpg?f=xs",
    ],
    [
      "Furniture",
      "https://www.ikea.com/ext/ingkadam/m/4d08014585d33c9/original/PH191589.jpg?f=xs",
    ],
    [
      "Sports",
      "https://m.media-amazon.com/images/I/61YJmiawE+L._AC_UF1000,1000_QL80_.jpg",
    ],
  ]);
  return (
    <>
      <div className="Categories">
        <div>
          <h2 style={{ padding: " 20px" }}>Categories</h2>
        </div>
        <div className="wrapper">
          {Categories.map((category) => (
            <CategoryCard category={category[0]} image={category[1]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
