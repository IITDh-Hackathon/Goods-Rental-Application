import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./../css/navBar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showMenu, setshowMenu] = useState(true);

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
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              TRVL <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>
          <div>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
