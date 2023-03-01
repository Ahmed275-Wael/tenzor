import React from "react";
import "./page-style/products.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product";

export default function Products() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3006/api/v1/product`)
      .then((response) => response.json())
      .then((actualData) => setProducts(actualData.productInfo))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const productsArray = products.map((product) => (
    <Product key={product.id} name={product.name} price={product.price} />
  ));

  return (
    <>
      <Navbar />
      <div className="intro-pic">
        <h1>MOBILE PHONES</h1>
        <p>BROWSE DIFFERENT PHONES FROM DIFFERENT USERS</p>
      </div>

      <div className="products">{productsArray}</div>
      <Footer />
    </>
  );
}
