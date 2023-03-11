import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./page-style/pagenotfound.css";

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="err404">
        <h1 className="pagenotfound-text">Page not found</h1>
      </div>
      <Footer />
    </>
  );
}
