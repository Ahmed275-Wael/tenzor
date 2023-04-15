import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Search() {
  const { state } = useLocation();
  console.log(state.data.name);
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
