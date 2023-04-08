import React from "react";
import "./styles/userproduct.css";
import pic from "../assets/images/maxresdefault.jpg";

export default function UserProducts() {
  return (
    <div className="user-product">
      <img src={pic} alt="" />
      <div className="user-product-data">
        <p>name</p>
        <p>name</p>
        <p>name</p>
        <p>name</p>
      </div>
    </div>
  );
}
