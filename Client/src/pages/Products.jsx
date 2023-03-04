import React from "react";
import "./page-style/products.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Paginate from "../components/Paginate";

export default function Products() {
  const [products, setProducts] = React.useState([]);
  const totalNumberPerPage = 8;

  React.useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        `http://localhost:3006/api/v1/product?page=1&limit=${totalNumberPerPage}`
      );
      const data = await res.json();
      setProducts(data.data);
    };
    getProducts();
  }, []);

  const fetchProducts = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3006/api/v1/product?page=${currentPage}&limit=${totalNumberPerPage}`
    );
    const data = await res.json();
    return data;
  };

  async function handlePageClick(data) {
    let currentPage = data.selected + 1;
    const productsFromServer = await fetchProducts(currentPage);
    setProducts(productsFromServer.data);
  }

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
      <div className="intro-pic">
        <h1>MOBILE PHONES</h1>
        <p>BROWSE DIFFERENT PHONES FROM DIFFERENT USERS</p>
      </div>
      <div className="products">{productsArray}</div>
      <Paginate handlePageClick={handlePageClick} />
      <Footer />
    </>
  );
}
