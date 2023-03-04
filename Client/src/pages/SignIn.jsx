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

  async function submitSignin() {
    // console.log(JSON.stringify(formData));
    let result = await fetch("http://localhost:3006/api/v1/user", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-x": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
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
        <div className="signin-form">
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
          <button onClick={submitSignin}>Login</button>
        </div>
      </div>
    </>
  );
}
