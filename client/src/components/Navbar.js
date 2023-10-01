import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import "./../css/navBar.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import CityLogos from "./cityLogos";
import ApiContext from "../context/api/ApiContext";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [click, setClick] = useState(false);
  const [showMenu, setshowMenu] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { city, setCity, loginStatus, profile, logout } = React.useContext(ApiContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [cityList, setCityList] = useState([
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Columbus",
    "Charlotte",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington, D.C.",
    "Boston",
    "Nashville",
    "Baltimore",
    "Oklahoma City",
    "Louisville",
  ]);
  const [showCity, setShowCity] = useState(false);

  const getCityList = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/city");
      setCityList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCityList();
  }, [city]);

  const show = () => {
    if (window.innerWidth <= 760) {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
  };
  window.addEventListener("resize", show);
  useEffect(show);

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

  return (
    <>
      <nav>
        <div
          className={showMenu ? "navbar-container-mobile" : "navbar-container"}
        >
          <div className="top-bar">
            <div className="location_conatiner">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p className="city-select" on onClick={handleOpen} >
                {!city ? "Select a City" : city}
              </p>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="box">
                  <p>Popular Cities</p>
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
                  {!showCity ? (
                    <p
                      className="view_all"
                      style={{ color: "#d11c1c" }}
                      onClick={() => setShowCity(true)}
                    >
                      View all cities
                    </p>
                  ) : (
                    <>
                      <p
                        className="view_all"
                        style={{ color: "#d11c1c" }}
                        onClick={() => setShowCity(false)}
                      >
                        View less cities
                      </p>
                      <div className="city_list">
                        <ul className="city_list_ul">
                          {cityList.map((city, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setCity(city);
                                handleClose();
                              }}
                            >
                              {city}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </Box>
              </Modal>
            </div>

            <div className="menu-icon" onClick={handleClick}>
              {loginStatus ? (
                <div className="nav_logos">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </Link>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
              ) : (
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              )}
            </div>
          </div>
          <div className="navbar-links">
            <ul className={click ? "navmenu-active" : "navmenu"}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "navlinks" + (isActive ? "-active" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    "navlinks" + (isActive ? "-active" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Products
                </NavLink>
              </li>
              {loginStatus ? (
                <div className="nav_logos">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </Link>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuClick}
      >
                  <i className="fa fa-user" aria-hidden="true"></i>
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem disabled={true}> Hello {profile?profile.email:"user"}!</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
                </div>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        "navlinks" + (isActive ? "-active" : "")
                      }
                      onClick={closeMobileMenu}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
