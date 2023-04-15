import React, { useEffect } from "react";
import "./page-style/search.css";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product";

export default function Search() {
  const { state } = useLocation();
  const [products, setProducts] = React.useState([]);

  // Get searched product
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`http://localhost:3006/api/v1/product/search`, {
        method: "post",
        body: JSON.stringify({ name: state.data.name }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      const data = await res.json();
      setProducts(data.data);
    };
    getProducts();
  });

  const productsArray = products.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      id={product.id}
      price={product.price}
    />
  ));
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>You searched for {state.data.name}</h1>
        <div className="products">{productsArray}</div>
      </div>
      <Footer />
    </>
  );
}
