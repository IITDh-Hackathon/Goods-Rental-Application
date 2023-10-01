import { Link, NavLink, useNavigate } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import "./../css/navBar.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import CityLogos from "./cityLogos";
import ApiContext from "../context/api/ApiContext";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import TextField from '@mui/material/TextField';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [click, setClick] = useState(false);
  const [showMenu, setshowMenu] = useState(true);
  const [open, setOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [currentCash, setCurrentCash] = useState(0);
  const [addCash, setaddCash] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

  const { city, setCity, loginStatus, profile, logout } =
    React.useContext(ApiContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleWalletClick = () => {
    // Fetch the user's current cash value from your API or wherever it's stored
    // For now, I'm just setting it to a static value of 1000 as an example
    const userCash = 1000;

    setCurrentCash(userCash);
    setWalletOpen(true);
  };
  const handleCloseWallet = () => {
    setWalletOpen(false);
  };
  const handleCashChange = (e) =>{
    setaddCash(e.target.value);
  }
  const handleAddCash = () =>{
    if(isNaN(addCash)){
      toast.error("Please enter a valid number");
      return;
    }
    setCurrentCash(currentCash+parseInt(addCash));
    setaddCash(0);
    toast.success("Cash added successfully");
  }

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
              <p className="city-select" on onClick={handleOpen}>
                {!city ? "Select a City" : city}
              </p>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="box">
                  <p>Select a City</p>
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
              </Modal>
              <Modal
                open={walletOpen}
                onClose={handleCloseWallet}
                aria-labelledby="wallet-modal-title"
                aria-describedby="wallet-modal-description"
              >
                <Box className="box">
                  <h2 className="wallet-title" >Wallet</h2>
                  <hr/>
                  <div className="wallet-body">
                    <div className="wallet-cash" >
                      <h3>
                      Current cash
                      </h3>
                      <div>
                        {currentCash}
                      </div>
                    </div>
                    <div>
                    <TextField id="outlined-basic" label="Enter Cash" variant="outlined" name='addCash' value={addCash} onChange={(e)=>handleCashChange(e)} />
                    <div className="addcash-btn">
                      <Button variant="contained" color="success" onClick={handleAddCash} >
                        Add Cash
                      </Button>
                    </div>
                      </div>
                  </div>
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
                  <i className="fa fa-wallet wallet" aria-hidden="true" onClick={handleWalletClick}></i>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleMenuClick}
                  >
                    <i className="fa fa-user" aria-hidden="true" style={{ fontSize: '24px' }}></i>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem disabled={true}>
                      {" "}
                      Hello {profile ? profile.email : "user"}!
                    </MenuItem>
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
