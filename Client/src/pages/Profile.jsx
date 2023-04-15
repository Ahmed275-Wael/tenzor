import React from "react";
import "./page-style/profile.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import userPic from "../assets/images/test.jpg";
import UserProducts from "../components/UserProduct";

export default function Profile() {
  const [userProducts, setUserProducts] = React.useState([]);

  //Get user data signed in from session storage
  const userData = JSON.parse(sessionStorage.getItem("user"));

  //Get the user's products to be shown in profile page
  React.useEffect(() => {
    const getProductsCount = async () => {
      const res = await fetch(
        `http://localhost:3006/api/v1/user/${userData.id}/products`
      );
      const data = await res.json();
      setUserProducts(data.data.data);
    };
    getProductsCount();
  }, [userData.id]);

  const productsArray = userProducts.map((product) => (
    <UserProducts
      key={product.id}
      idd={product.id}
      name={product.name}
      userId={product.userId}
      price={product.price}
      description={product.description}
    />
  ));

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="user-data">
          <div className="user-pic">
            <img src={userPic} alt="user" />
          </div>
          <div className="user-data-content">
            <p className="name">
              {userData.firstName} {userData.lastName}
            </p>
            <p className="mail">{userData.email}</p>
          </div>
        </div>
        <div className="user-products">
          <p>My products</p>
          <br />
          {productsArray}
        </div>
      </main>
      <Footer />
    </>
  );
}
