import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./page-style/signin.css";
import Navbar from "../components/Navbar";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  //Error API message display
  const [statusError, setStatusError] = useState(false);

  //On submit function
  const onSubmit = async (data) => {
    let result = await fetch("http://localhost:3006/api/v1/user", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.status === "Sucess") {
      sessionStorage.setItem("user", JSON.stringify(result.data));
      history.push("/");
    } else if (result.status === "Failed") {
      setStatusError((prevState) => !prevState);
      setTimeout(() => {
        setStatusError((prevState) => !prevState);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="sign-in">
        <div className="sign-up-img">
          <h1>New Here?</h1>
          <p>Sign up now and browse many phones</p>
          <Link to="/signup">Register</Link>
        </div>
        <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Login to your account.</h1>
          <input
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
                message: "Entered value does not match email format",
              },
            })}
            placeholder="EMAIL"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
          <input
            {...register("password", {
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                //Minimum eight characters, at least one letter and one number
                message:
                  "Password must contain a minimum of eight characters, at least one letter and one number",
              },
            })}
            type="password"
            placeholder="PASSWORD"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          <button onClick={handleSubmit}>Login</button>
          <p className="error">{statusError && "Invalid email or password"}</p>
        </form>
      </div>
    </>
  );
}
