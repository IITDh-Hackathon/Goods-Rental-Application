import React from 'react'
import '../css/CategoryCardCss.css'
import { useNavigate } from 'react-router-dom'

const CategoryCard = (props) => {
    const { category, image } = props
    const navigate = useNavigate()

    const handleOnClick = (category) => {
        navigate(`/products/${category}`)
    }
    return (
        <div className="CategoryCard" onClick={()=>handleOnClick(category)}>
            <img src={image} alt='' />
            <div className="category-name">{category}</div>
        </div>
    )
}

export default CategoryCard