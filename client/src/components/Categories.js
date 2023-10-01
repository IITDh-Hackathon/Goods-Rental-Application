import React from 'react'
import '../css/CategoriesCss.css'
import CategoryCard from './CategoryCard';
import { useState } from 'react';

const Categories = () => {
  const [Categories, setCategories] = useState([['Baskets','https://www.ikea.com/images/93/7f/937f022b5ff3ff7c0a669711922e0a4f.png?f=xxs'],['Furniture','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hitachicm.com%2Fglobal%2Fen%2F&psig=AOvVaw0FkIyqF0RzG4zhN7A8Dpli&ust=1696243049713000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiY2dv009SBAxUNXmwGHf8MDM4QjRx6BAgAEA0'],['Clothing','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg'],['Books','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg'],['Sports','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg'],['Others','https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample71.jpg']])


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