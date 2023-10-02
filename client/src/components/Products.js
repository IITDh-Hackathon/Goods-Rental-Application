import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/ProductsCss.css'
import GoodsCard from './GoodsCard';
import ApiContext from '../context/api/ApiContext';
import Pagination from '@mui/material/Pagination';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';

const Products = (props) => {
    const { category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [open, setOpen] = React.useState(false);
    const context = React.useContext(ApiContext);
    const [items, setItems] = useState([]);
    const {city, cartitems} = context;
    const [params, setParams] = useState({
        page: 1,
        limit: 6,
        category: selectedCategory,
        city: city,
        sortBy: "price",
    })
    const { getItems } = context;
    const [Sort, setSort] = useState(true);
    const noItems = process.env.REACT_APP_SERVER_URL + "/static/noItem.png";

  useEffect(() => {
    setParams({
      ...params,
      city: city,
      sortBy: Sort ? "price" : "-price",
    });
  }, [city, Sort]);

  useEffect(() => {
    setOpen(true);
    getItems(params).then((res) => {
      setItems(res[0]);
      setOpen(false);
    });
  }, [params, getItems]);

  // Function to handle category selection
  const handleCategoryClick = (clickedCategory) => {
    setParams({
      ...params,
      category: clickedCategory,
      page: 1,
    });
  };

  const handleChangePage = (event, newPage) => {
    setParams({
      ...params,
      page: newPage,
    });
  };

  return (
    <div>
      <h1 className="products-title">Products</h1>
      <div className="products-body">
        <div className="products-filter">
          <div className="filter-body">
            <div className="filters-sort">
              <div className="filter-title">Sort By Price</div>
              <div className="filter-category-body">
                <div
                  className={`filter-category-item ${
                    Sort ? "selected-category" : ""
                  }`}
                  onClick={() => setSort(true)}
                >
                  Low to High Price
                </div>
                <div
                  className={`filter-category-item ${
                    !Sort ? "selected-category" : ""
                  }`}
                  onClick={() => setSort(false)}
                >
                  High to Low Price
                </div>
              </div>
            </div>
            <div className="filter-category">
              <div className="filter-title">Categories</div>
              <div className="filter-category-body">
                {[
                  "Baskets",
                  "Furniture",
                  "Automobile",
                  "Cleaning Accessories",
                  "Books",
                  "Sports",
                  "Others",
                ].map((item) => (
                  <div
                    key={item}
                    className={`filter-category-item ${
                      params.category === item ? "selected-category" : ""
                    }`}
                    onClick={() => handleCategoryClick(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="products">
          {items.data && items.data.results && items.data.results.length === 0 && (
            <>
              {/* <div className="no-items">No Items Found</div> */}
              <div className="no-items">
                <img src={noItems} alt="No Items Found" />
                {/* <h2>No Items Found</h2> */}
              </div>
            </>
          )}
          {items.data &&
            items.data.results &&
            items.data.results.map((item) => (
              <>
                {cartitems.some((cartitem) => cartitem.item.id === item.id) ? (
                  <GoodsCard
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                    category={item.category}
                    images={item.images}
                    key={item.id}
                    id={item.id}
                    message="✓ Added"
                  />
                ) : (
                  <GoodsCard
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                    category={item.category}
                    images={item.images}
                    key={item.id}
                    id={item.id}
                    message="Add to cart"
                  />
                )}
              </>
            ))}
        </div>
      </div>
        <Pagination
          className="paginate"
          count={items.data && items.data.totalPages}
          page={params.page}
          onChange={handleChangePage}
        />
     <Backdrop
     className='backdrop'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Products;
