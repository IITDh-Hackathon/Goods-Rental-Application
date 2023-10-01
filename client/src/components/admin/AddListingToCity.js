import React from 'react'
import GoodsCard from '../GoodsCard'
import '../../css/AddListingToCityCss.css'
import { useContext, useState, useEffect } from 'react'
import ApiContext from '../../context/api/ApiContext'
import Pagination from '@mui/material/Pagination';

const AddListingToCity = () => {
  const { city, setCity, getItems } = useContext(ApiContext);
  const [listed, setListed] = useState([]);
  const [listedPage, setListedPage] = useState(1);
  const [notListed, setNotListed] = useState([]);
  const [notListedPage, setNotListedPage] = useState(1);
  const message = "addItem";

  useEffect( () => {
    getItems(
      {
        city:city,
        page:listedPage,
      }
    ).then((res) => {
      setListed(res[0]);
    }
    );
    getItems(
      {
        notCity:city,
        page:notListedPage,
      }
    ).then((res) => {
      setNotListed(res[0]);
    }
    );
  }, [city, getItems, listedPage, notListedPage]);

  const handleChangeListedPage = (event, newPage) => {
    setListedPage(newPage);
  }

  const handleChangeNotListedPage = (event, newPage) => {
    setNotListedPage(newPage);
  }

  return (
    <div>
      { city ?
        (
          <>
        <div className="not-added" >
            <h2 className='not-added-title' >Items That Are Not Added {city} </h2>
            <div className='wrapper'>
              {notListed.data && notListed.data.results && notListed.data.results.map((item) => (
                <GoodsCard name={item.name} description={item.description} price={item.price} quantity={item.quantity} category={item.category} images={item.images} message={message} key={item.id} city={city} id={item.id}/>
              ))
              }
            </div>
            <Pagination className='paninate' count={notListed.data ? notListed.data.totalPages:10} page={notListedPage} onChange={handleChangeNotListedPage} />
        </div>
        <div className="added">
            <h2 className='added-title'>Items That Are Added </h2>
            <div className='wrapper'>
              {listed.data && listed.data.results && listed.data.results.map((item) => (
                <GoodsCard name={item.name} description={item.description} price={item.price} quantity={item.quantity} category={item.category} images={item.images} key={item.id} city={city} id={item.id}/>
              ))
              }
            </div>
            <Pagination className='paninate' count={listed.data ? listed.data.totalPages:10} page={listedPage} onChange={handleChangeListedPage} />
        </div>
        </>
      ): "Please Select A City"}
    </div>

  )
}

export default AddListingToCity