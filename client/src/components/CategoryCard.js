import React from 'react'
import '../css/CategoryCardCss.css'

const CategoryCard = (props) => {
    const { category, image } = props
    const handleOnClick = (category) => {
        console.log(category);
    }
    return (
        <div className="CategoryCard" onClick={()=>handleOnClick(category)}>
            <img src={image} alt='' />
            <div className="category-name">{category}</div>
        </div>
    )
}

export default CategoryCard