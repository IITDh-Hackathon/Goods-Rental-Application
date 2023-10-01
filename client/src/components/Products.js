import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/ProductsCss.css'
import GoodsCard from './GoodsCard';
import ApiContext from '../context/api/ApiContext';
import Pagination from '@mui/material/Pagination';



const Products = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(category);
    const context = React.useContext(ApiContext);
    const [items, setItems] = useState([]);
    const {city} = context;
    console.log(city);
    const [params, setParams] = useState({
        page: 1,
        limit: 4,
        category: selectedCategory,
        city: city,
    })
    const { getItems } = context;

    useEffect(() =>
    {
        setParams({
            ...params,
            city: city,
        })
    }
    , [city]);

    useEffect(() => {
        getItems(params).then((res) => {
            setItems(res[0]);
        }
        );
    }, [params, getItems]);

    const [Sort, setSort] = useState(true)

    // Function to handle category selection
    const handleCategoryClick = (clickedCategory) => {
        setParams({
            ...params,
            category: clickedCategory,
            page: 1
        });
    };

    const handleChangePage = (event, newPage) => {
        setParams({
            ...params,
            page: newPage
        });
    }


    return (
        <div>
            <h1 className='products-title'>Products</h1>
            <div className="products-body">
                <div className="products-filter">
                    <div className="filter-body">
                        <div className="filters-sort">
                            <div className="filter-title">
                                Sort
                            </div>
                            <div className="filter-category-body">
                                <div className={`filter-category-item ${Sort ? 'selected-category' : ''}`} onClick={() => setSort(true)}>Ascending</div>
                                <div className={`filter-category-item ${!Sort ? 'selected-category' : ''}`} onClick={() => setSort(false)}>Descending</div>
                            </div>
                        </div>
                        <div className="filter-category">
                            <div className="filter-title">Category</div>
                            <div className="filter-category-body">
                                {['Baskets', 'Furniture', 'Clothing', 'Books', 'Sports', 'Others'].map((item) => (
                                    <div
                                        key={item}
                                        className={`filter-category-item ${params.category === item ? 'selected-category' : ''}`}
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
                    {items.data && items.data.results && items.data.results.map((item) => (
                        <GoodsCard name={item.name} description={item.description} price={item.price} quantity={item.quantity} category={item.category} images={item.images} key={item.id} id={item.id} />
                    ))
                    }

                </div>
                    <Pagination className='paninate' count={items.data && items.data.totalPages} page={params.page} onChange={handleChangePage} />
            </div>
        </div>
    )
}

export default Products