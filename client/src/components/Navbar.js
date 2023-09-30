import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import "./../css/navBar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [click, setClick] = useState(false);
  const [showMenu, setshowMenu] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const show = () => {
    if (window.innerWidth <= 760) {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
  };
  window.addEventListener("resize", show);
  useEffect(show);

  return (
    <>
      <nav>
        <div
          className={showMenu ? "navbar-container-mobile" : "navbar-container"}
        >
          <div className="top-bar">
            <div className="location_conatiner">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p on onClick={handleOpen}>
                Select City
              </p>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="box">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Select a City
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            </div>

            <div className="menu-icon" onClick={handleClick}>
              {loggedIn ? (
                <div className="nav_logos">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </Link>
                  <Link to="/profile">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </Link>
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
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    "navlinks" + (isActive ? "-active" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              {!loggedIn ? (
                <li>
                  <NavLink
                    to="/sign-up"
                    className={({ isActive }) =>
                      "signup" + (isActive ? "-active" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
              {loggedIn ? (
                <div className="nav_logos">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </Link>
                  <Link to="/profile">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
