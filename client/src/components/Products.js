import React from 'react'
import { useState } from 'react';
import '../css/ProductsCss.css'
import GoodsCard from './GoodsCard';

const Products = (props) => {
    const { category } = props;
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [Sort, setSort] = useState(true)

    // Function to handle category selection
    const handleCategoryClick = (clickedCategory) => {
        setSelectedCategory(clickedCategory);
    };

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
                                        className={`filter-category-item ${selectedCategory === item ? 'selected-category' : ''}`}
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
                    <GoodsCard name="Basket" description="This is a basket" price="100" quantity="10" category="Baskets" message="Add to cart" />
                    <GoodsCard name="Basket" description="This is a basket" price="100" quantity="10" category="Baskets" message="Add to cart" />
                    <GoodsCard name="Basket" description="This is a basket" price="100" quantity="10" category="Baskets" message="Add to cart" />
                    <GoodsCard name="Basket" description="This is a basket" price="100" quantity="10" category="Baskets" message="Add to cart" />
                    <GoodsCard name="Basket" description="This is a basket" price="100" quantity="10" category="Baskets" message="Add to cart" />
                    <GoodsCard name="Basket" description="This is a basket" price="100" quantity="10" category="Baskets" message="Add to cart" />
                </div>
            </div>
        </div>
    )
}

export default Products