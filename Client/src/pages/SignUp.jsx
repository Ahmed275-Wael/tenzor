import React from "react";
import { Link } from "react-router-dom";
import "./page-style/signup.css";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  function inputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  async function submitSignup(e) {
    e.preventDefault();
    let result = await fetch("http://localhost:3006/api/v1/user/register", {
      method: "post",
      body: JSON.stringify({ ...formData, image: "culpa ea", gender: "male" }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    result = await result.json();
    console.log(result);
    // if (result.status === "Success") {
    //   localStorage.setItem("user", JSON.stringify(result.data));
    //   history.push("/");
    // } else if (result.status === "Failed") {
    //   setStatusError((prevState) => !prevState);
    //   setTimeout(() => {
    //     setStatusError((prevState) => !prevState);
    //   }, 3000);
    // }
  }

  return (
    <>
      <Navbar />
      <div className="sign-up">
        <form className="signup-form" action="">
          <h1>Register a new account.</h1>
          <div className="name-inputs">
            <input
              onChange={inputChange}
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
            />
            <input
              onChange={inputChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
            />
          </div>
          <input
            onChange={inputChange}
            name="email"
            type="text"
            placeholder="EMAIL"
            value={formData.email}
          />
          <input
            onChange={inputChange}
            name="phoneNumber"
            type="text"
            placeholder="PHONE NUMBER"
            value={formData.phoneNumber}
          />
          <input
            onChange={inputChange}
            name="password"
            type="password"
            placeholder="PASSWORD"
            value={formData.password}
          />
          <input
            onChange={inputChange}
            name="confirmPassword"
            type="password"
            placeholder="CONFIRM PASSWORD"
            value={formData.confirmPassword}
          />
          {/* <div className="form-gender">
            <h1 className="form-gender-header">Gender</h1>
            <div className="gender-radio">
              <label htmlFor="male">Male</label>
              <input type="radio" id="male" />
              <label htmlFor="female">Female</label>
              <input type="radio" id="female" />
            </div>
          </div> */}
          <button onClick={submitSignup}>Resgiter</button>
        </form>
        <div className="sign-in-img">
          <h1>Already registered?</h1>
          <p>Login now and welcome back!</p>
          <Link to="/signin">Login</Link>
        </div>
      </div>
    </>
  );
}
