import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img from "../assets/images/product.jpg";
import "./page-style/viewprods.css";
import { useParams } from "react-router-dom";

export default function ViewProduct() {
  const [imgDisplay, setImgDisplay] = React.useState(true);
  const [productData, setProductData] = React.useState({});
  let { id } = useParams();

  //Image full display
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

  //Fetch the product data by id
  React.useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`http://localhost:3006/api/v1/product/${id}`);
      const data = await res.json();
      setProductData(data.data);
    };
    getProduct();
  }, [id]);

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
          <h1 className="product-title">
            {productData.name} {productData.id}
          </h1>
          <h1 className="seller-name">Seller: {productData.userId}</h1>
          <h2 className="price">{productData.price} L.E</h2>
          <p className="desc">{productData.description}</p>
          <button className="buy">Buy Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
