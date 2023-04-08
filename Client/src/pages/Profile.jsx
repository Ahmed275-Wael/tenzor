import React from "react";
import "./page-style/profile.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import userPic from "../assets/images/test.jpg";
import UserProducts from "../components/UserProduct";

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="user-data">
          <div className="user-pic">
            <img src={userPic} alt="user" />
          </div>
          <div className="user-data-content">
            <p className="name">Mazen Samer</p>
            <p className="mail">example@gmail.com</p>
          </div>
        </div>
        <div className="user-products">
          <p>My products</p>
          <br />
          <UserProducts />
          <UserProducts />
          <UserProducts />
          <UserProducts />
        </div>
      </main>
      <Footer />
    </>
  );
}
