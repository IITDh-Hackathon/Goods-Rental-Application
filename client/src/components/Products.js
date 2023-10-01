import React from 'react'
import { useState } from 'react';
import '../css/ProductsCss.css'
import GoodsCard from './GoodsCard';

const Products = (props) => {
    const { category } = props;
    const [selectedCategory, setSelectedCategory] = useState(null);

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
                    <div className="filter-title">Filter</div>
                        <div className="filter-category">
                            <div className="filter-category-title">Category</div>
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