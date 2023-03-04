import React from "react";
import "./page-style/contact.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    emailContent: "",
  });
  function emailHandle(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <>
      <Navbar />
      <div className="contact">
        <i className="fa-light fa-envelope-open"></i>
        <form action="">
          <textarea
            placeholder="Enter your inquiry"
            onChange={emailHandle}
            name="emailContent"
            value={formData.emailContent}
          />
          <button>Send</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
