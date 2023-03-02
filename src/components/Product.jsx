import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/maxresdefault.jpg";
import "./styles/product.css";

export default function Product(props) {
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt="pic" />
      </div>
      <div className="text">
        <p className="name">
          {props.name} {props.id}
        </p>
        <p className="price">{props.price}</p>
        <Link to="/products/5">View Product</Link>
      </div>
    </div>
  );
}
