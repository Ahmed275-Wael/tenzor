import React, { useState } from "react";
import "./page-style/uploadprod.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UploadProd() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    methodOfPayment: 0,
    discount: 0,
    userId: JSON.parse(sessionStorage.getItem("user")).id,
    description: "",
  });

  function inputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }
  return (
    <>
      <Navbar />
      <div className="upload-form">
        <input
          onChange={inputChange}
          name="name"
          className="upload-name"
          type="text"
          value={formData.name}
        />
        <input
          onChange={inputChange}
          name="image"
          className="upload-image"
          type="file"
          value={formData.image}
        />
        <input
          onChange={inputChange}
          name="price"
          className="upload-price"
          type="text"
          value={formData.price}
        />
        {/* <input className="method-upload" type="text" />
        <input className="discount-upload" type="text" /> */}
        <textarea
          onChange={inputChange}
          name="description"
          className="desc-upload"
          type="text"
          value={formData.description}
        />
      </div>
      <Footer />
    </>
  );
}
