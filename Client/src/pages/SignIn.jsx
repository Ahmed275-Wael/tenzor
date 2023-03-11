import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./page-style/signin.css";
import Navbar from "../components/Navbar";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  //Error message display
  const [statusError, setStatusError] = useState(false);

  //// RegEx validations (yet to be implemented)
  // const [emailErr, setEmailErr] = useState(false);
  // const [passError, setPwdError] = useState(false);
  // const validEmail = new RegExp(
  //   "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  // );
  // const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  function inputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  async function submitSignin(e) {
    e.preventDefault();
    let result = await fetch("http://localhost:3006/api/v1/user", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.status === "Success") {
      sessionStorage.setItem("user", JSON.stringify(result.data));
      history.push("/");
    } else if (result.status === "Failed") {
      setStatusError((prevState) => !prevState);
      setTimeout(() => {
        setStatusError((prevState) => !prevState);
      }, 3000);
    }
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
        <form className="signin-form">
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
          <p style={{ color: "red" }}>
            {statusError && "Invalid email or password"}
          </p>
        </form>
      </div>
    </>
  );
}
