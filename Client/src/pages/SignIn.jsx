import React from "react";
import { Link } from "react-router-dom";
import "./page-style/signin.css";
import Navbar from "../components/Navbar";

export default function SignIn() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
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
      <div className="sign-in">
        <div className="sign-up-img">
          <h1>New Here?</h1>
          <p>Sign up now and browse many phones</p>
          <Link to="/signup">Register</Link>
        </div>
        <form className="signin-form" action="">
          <h1>Login to your account.</h1>
          <input
            onChange={inputChange}
            name="email"
            type="text"
            placeholder="EMAIL"
            value={formData.email}
          />
          <input
            onChange={inputChange}
            name="password"
            type="password"
            placeholder="PASSWORD"
            value={formData.password}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
}
