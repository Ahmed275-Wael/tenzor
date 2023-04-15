import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles/navbar.css";

export default function Navbar() {
  let history = useHistory();
  const [toggleAccount, setToggleAccount] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    history.push("/search", {
      data,
    });
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
  return (
    <nav>
      <div className="top-nav">
        <div className="logo">
          <h2>Tenzor</h2>
          {/* <img src="../images/" alt="" /> */}
        </div>
        <ul className="main-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
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
                JSON.parse(sessionStorage.getItem("user")).firstName.slice(
                  1
                )}{" "}
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
        <form action="" onSubmit={handleSubmit(onSubmit)}>
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
