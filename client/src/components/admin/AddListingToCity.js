import React from 'react'
import GoodsCard from '../GoodsCard'
import '../../css/AddListingToCityCss.css'
import { useContext, useState, useEffect } from 'react'
import ApiContext from '../../context/api/ApiContext'
import Pagination from '@mui/material/Pagination';

const AddListingToCity = () => {
  const { city, setCity, getItems } = useContext(ApiContext);
  const [listed, setListed] = useState([]);
  const [notListed, setNotListed] = useState([]);
  const message = "addItem";

  useEffect( () => {
    getItems(
      {
        city:city,
      }
    ).then((res) => {
      setListed(res[0]);
    }
    );
    getItems(
      {
        notCity:city,
      }
    ).then((res) => {
      setNotListed(res[0]);
    }
    );
  }, [city, getItems]);

  return (
    <div>
        <div className="not-added" >
            <h2 className='not-added-title' >Items That Are Not Added {city} </h2>
            <div className='wrapper'>
              {notListed.data && notListed.data.results && notListed.data.results.map((item) => (
                <GoodsCard name={item.name} description={item.description} price={item.price} quantity={item.quantity} category={item.category} image={item.image} message={message} key={item.id}/>
              ))
              }
            </div>
            <Pagination className='paninate' count={notListed.data ? notListed.data.totalPages:10} color="warning" />
        </div>
        <div className="added">
            <h2 className='added-title'>Items That Are Added </h2>
            <div className='wrapper'>
              {listed.data && listed.data.results && listed.data.results.map((item) => (
                <GoodsCard name={item.name} description={item.description} price={item.price} quantity={item.quantity} category={item.category} image={item.image} key={item.id}/>
              ))
              }
            </div>
        </div>
    </div>
  )
}

export default AddListingToCity