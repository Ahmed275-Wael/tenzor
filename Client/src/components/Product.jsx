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
        <p className="name">{props.name}</p>
        <p className="price">{props.price}</p>
        <Link to={`/products/${props.id}`}>View Product</Link>
      </div>
    </div>
  );
}
