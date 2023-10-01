import React from 'react'
import '../css/CategoriesCss.css'
import CategoryCard from './CategoryCard';
import { useState } from 'react';

const Categories = () => {
  const [Categories, setCategories] = useState([['Baskets','https://www.ikea.com/images/93/7f/937f022b5ff3ff7c0a669711922e0a4f.png?f=xxs'],['Furniture','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg'],['Clothing','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg'],['Books','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg'],['Sports','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg'],['Others','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg']])


  return (
    <>
    <div className="Categories">
    <div>
        <h1>Categories</h1>
    </div>
    <div className='wrapper' >
        {Categories.map((category) => (
            <CategoryCard category={category[0]} image={category[1]} />
        ))}
    </div>
    </div>
    </>
  )
}

export default Categories