import React from 'react'
import '../css/CategoryCardCss.css'

const CategoryCard = (props) => {
    const { category, image } = props
    return (
        <div className="CategoryCard">
            <img src={image} alt='' />
            <div className="category-name">{category}</div>
        </div>
    )
}

export default CategoryCard