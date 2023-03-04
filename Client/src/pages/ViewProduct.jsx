import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img from "../assets/images/product.jpg";
import "./page-style/viewprods.css";

export default function ViewProduct() {
  const [imgDisplay, setImgDisplay] = React.useState(true);
  function displayImage() {
    //Stop scrollin of the body and view image full size
    if (imgDisplay) {
      document.body.style.overflow = "hidden";
      setImgDisplay((prevState) => !prevState);
    } else {
      document.body.style.overflow = "auto";
      setImgDisplay((prevState) => !prevState);
    }
  }
  return (
    <>
      <Navbar />
      <div
        onClick={displayImage}
        className={imgDisplay ? "layout layout-toggle" : "layout"}
      ></div>
      <img
        className={imgDisplay ? "realsize-img toggle-img" : "realsize-img"}
        src={img}
        alt=""
      />
      <div className="view-product">
        <img onClick={displayImage} src={img} alt="" />
        <div className="product-text">
          <h1 className="product-title">Samsung galaxy s23</h1>
          <h1 className="seller-name">Seller: Mazen Samer</h1>
          <h2 className="price">25000 L.E</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quasi accusantium provident blanditiis ullam. Quaerat dicta illum
            mollitia ipsum qui veritatis animi cupiditate aut natus? Iure
            provident voluptatibus eius! Aut?
          </p>
          <button className="buy">Buy Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
