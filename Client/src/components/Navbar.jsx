import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles/navbar.css";

export default function Navbar() {
  let history = useHistory();
  const [toggleAccount, setToggleAccount] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    history.push(`/search=${data.name}`);
  }
  function onSubmitMobile(data) {
    history.push(`/search=${data.nameMobile}`);
  }

  function accClick() {
    setToggleAccount((prevState) => !prevState);
  }
  function profileClick() {
    setToggleProfile((prevState) => !prevState);
  }

  function logoutOnClick() {
    sessionStorage.removeItem("user");
    history.push("/");
    window.location.reload();
  }

  function mobileMenuClick() {
    setToggleMobileMenu((prevState) => !prevState);
  }
  return (
    <nav>
      {/* This is the sub menu for mobile screens */}
      <div
        className={
          toggleMobileMenu
            ? "toggled-mobile-submenu mobile-submenu"
            : "mobile-submenu"
        }
      >
        <i onClick={mobileMenuClick} className="fa-solid fa-xmark"></i>
        {sessionStorage.getItem("user") && (
          <>
            <div className="profile-mobile">
              <p>
                Hello,{" "}
                {JSON.parse(sessionStorage.getItem("user"))
                  .firstName.charAt(0)
                  .toUpperCase() +
                  JSON.parse(sessionStorage.getItem("user")).firstName.slice(1)}
              </p>
              <div className="profile-mobile-links">
                <ul>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link onClick={logoutOnClick} to="">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {sessionStorage.getItem("user") && (
            <li>
              <Link to="/upload">
                Upload &nbsp;
                <i className="fa-solid fa-arrow-up-from-bracket fa-sm"></i>
              </Link>
            </li>
          )}
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          {!sessionStorage.getItem("user") && (
            <>
              <li>
                <Link to="/signin">Login</Link>
              </li>
              <li>
                <Link to="signup">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* ================================================== */}
      {/* This is for normal screens */}
      <div className="top-nav">
        <div className="logo">
          <h2>Tenzor</h2>
          {/* <img src="../images/" alt="" /> */}
        </div>
        <ul className="main-links">
          {/* Search doesnt work here!!!!!!! */}
          <form id="mobile-form" onSubmit={handleSubmit(onSubmitMobile)}>
            <label htmlFor="search-bar-mobile">
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
              {...register("nameMobile")}
              id="search-bar-mobile"
              type="text"
              placeholder="Search"
            />
            <button type="submit">Search</button>
          </form>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {!sessionStorage.getItem("user") && (
            <li className="main-acc-click">
              <div id="acc-main" onClick={accClick}>
                Account
              </div>
              <div
                className={
                  toggleAccount ? "toggle-on acc-list" : "toggle-off acc-list"
                }
              >
                <ul>
                  <li>
                    <Link id="login" to="/signin">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="signup">Register</Link>
                  </li>
                </ul>
              </div>
            </li>
          )}
          {sessionStorage.getItem("user") && (
            <li>
              <Link to="/upload">
                Upload &nbsp;
                <i className="fa-solid fa-arrow-up-from-bracket fa-sm"></i>
              </Link>
            </li>
          )}
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li id="mobile-menu-toggle">
            <i onClick={mobileMenuClick} className="fa-solid fa-bars"></i>
          </li>
        </ul>
      </div>
      <div className="bottom-nav">
        {sessionStorage.getItem("user") && (
          <div className="profile">
            <p onClick={profileClick}>
              Hello,{" "}
              {JSON.parse(sessionStorage.getItem("user"))
                .firstName.charAt(0)
                .toUpperCase() +
                JSON.parse(sessionStorage.getItem("user")).firstName.slice(1)}
              <i className="fa-solid fa-chevron-down fa-xs"></i>
            </p>
            <ul className={toggleProfile ? "toggle-on" : "toggle-off"}>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <hr />
              <li>
                <Link onClick={logoutOnClick} to="">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input
            {...register("name")}
            id="search-bar"
            type="text"
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}
