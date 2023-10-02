import React from 'react'
import GoodsCard from '../GoodsCard'
import '../../css/AddListingToCityCss.css'
import { useContext, useState, useEffect } from 'react'
import ApiContext from '../../context/api/ApiContext'
import Pagination from '@mui/material/Pagination';
import { Modal, Box } from '@mui/material';
import CityLogos from '../cityLogos.js';

const AddListingToCity = () => {
  const { city, setCity, getItems } = useContext(ApiContext);
  const [listed, setListed] = useState([]);
  const [listedPage, setListedPage] = useState(1);
  const [notListed, setNotListed] = useState([]);
  const [notListedPage, setNotListedPage] = useState(1);
  const [open, setOpen] = useState(true);
  const message = "addItem";
  const cities = {
    Mumbai: "in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
    Delhi: "in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
    Bengaluru: "in.bmscdn.com/m6/images/common-modules/regions/bang.png",
    Hyderabad: "in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
    Ahmedabad: "in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    Chandigarh: "in.bmscdn.com/m6/images/common-modules/regions/chd.png",
    Chennai: "in.bmscdn.com/m6/images/common-modules/regions/chen.png",
    Pune: "in.bmscdn.com/m6/images/common-modules/regions/pune.png",
    Kolkata: "in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
    Kochi: "in.bmscdn.com/m6/images/common-modules/regions/koch.png",
  };

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

  const handleClose = () => {
    setOpen(false);
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
            <Pagination className='paginate' count={notListed.data ? notListed.data.totalPages:10} page={notListedPage} onChange={handleChangeNotListedPage} />
        </div>
        <div className="added">
            <h2 className='added-title'>Items That Are Added </h2>
            <div className='wrapper'>
              {listed.data && listed.data.results && listed.data.results.map((item) => (
                <GoodsCard name={item.name} description={item.description} price={item.price} quantity={item.quantity} category={item.category} images={item.images} key={item.id} city={city} id={item.id}/>
              ))
              }
            </div>
            <Pagination className='paginate' count={listed.data ? listed.data.totalPages:10} page={listedPage} onChange={handleChangeListedPage} />
        </div>
        </>
      ): <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="box">
                  <h2 style={{color:'red',textAlign:'center'}} >Please select a city to add</h2>
                  <div className="city_logos">
                    <ul className="logos_ul">
                      {Object.keys(cities).map((city) => (
                        <CityLogos
                          name={city}
                          url={`https://${cities[city]}`}
                          setCity={setCity}
                          handleClose={handleClose}
                        />
                      ))}
                    </ul>
                  </div>
                </Box>
              </Modal>}
    </div>

  )
}

export default AddListingToCity