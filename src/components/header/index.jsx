import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";
import Cookies from "js-cookie";
import axios from "axios";
const Header = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookies.get('token');
        const response = await axios.get('http://localhost:8000/fetch-user', {
          headers: {
            Authorization: `${token}`
          }
        });

        if (response.status === 200) {
          console.log(response.data.user.username );
          setUser(response.data.user.username);
        }
        else {
          console.log("user is not defined in the token")
        }
      } catch (error) {
        toast.error("user is not defined");
        console.log("user is not defind, error:", error);
      }
    }
    fetchUserData();
  }, []);
  useEffect(() => {
    document.body?.classList?.remove("menu-opened");
    const token = Cookies.get("token");
    setLoggedIn(!!token); // Convert token to a boolean value
    return () => {
      document.body.className = "";
    };
  }, []);

  // change header background on scroll
  const [navbar, setNavbar] = useState(false);
  // Mobile Menu toggle
  const [mobileSubMenu, setMobileSubMenu] = useState(false);

  const openMobileMenu = () => {
    document.body?.classList?.add("menu-opened");
  };
  const hideMobileMenu = () => {
    document.body?.classList?.remove("menu-opened");
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleLogout = async () => {
    Cookies.remove("token");
    toast.success("Logout successfully");
    setLoggedIn(false); // Update isLoggedIn state to false
  };

  window.addEventListener("scroll", changeHeaderBackground);

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setLoggedIn(!!token);
  }, []);

  return (
    <header className="header " style={{ background: "blue" }}>
      <div className="header-fixed">
        <nav
          className={
            navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container">
            <div className="navbar-header">
              <Link id="mobile_btn" to="/" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="/"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu active ">
                  <Link className={mobileSubMenu ? "submenu" : ""} to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="nav header-navbar-rht">
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link header-profile" to="/profile">
                      {user}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link header-logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link header-sign" to="/login">
                      Signin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link header-login" to="/register">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
