import React from 'react'
import '../css/GoodsCardCss.css'
import { useState,useContext } from 'react'
import { toast } from 'react-toastify';
import ApiContext from './../context/api/ApiContext'

const GoodsCard = (props) => {
    const { addCityListing } = useContext(ApiContext);
    const imageStore = process.env.REACT_APP_SERVER_URL+"/static/";
    let { name, description, price, quantity, images, category,message, id, city } = props
    let image;
    if(!images){
        image = "https://cdn1.iconfinder.com/data/icons/image-manipulations/100/13-512.png";
    }
    else{
        image = imageStore + images[0];
    }

    const handleOnSubmit=(city,id)=>{
        if(message==="addItem"){
            console.log(id);
            console.log(city);
            const res = addCityListing(city,id);
            const [response, error] = res || [null, true];
            if (error) {
                toast.error(response.message);
            }
            else {
                toast.success('Item Added to City Listing Successfully');
            }
        }else if(message==="Add to cart"){
            console.log(id);
            console.log(city);
            const res = addCityListing(city,id);
            const [response, error] = res || [null, true];
            if (error) {
                toast.error(response.message);
            }
            else {
                toast.success('Item Added to City Listing Successfully');
            }
        }
    }
    
    return (
        <>
            <div className="GoodsCard">
                <img src={image} alt='' />
                <div className="category">{category}</div>
                <div className='GoodsBody'>
                    <p>
                        <h2 className='goods-name'>
                            {name}
                        </h2>
                        <h3 className='goods-price'>
                        ₹ {price}
                        </h3>
                        {description.length > 25 ? description.substring(0, 25) + "..." : description}
                    </p><span className='message' onClick={()=>{
                        if(message==="addItem"){
                            handleOnSubmit(city,id);
                        }else if(message==="Add to cart"){
                            handleOnSubmit(city,id);
                        }
                    }} >{message}</span>
                </div>
            </div>
        </>
    )
}

export default GoodsCard