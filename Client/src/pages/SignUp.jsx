import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./page-style/signup.css";
import Navbar from "../components/Navbar";

//ERRORS BS HYA ELL FADLA HNA DELETE WHEN COMPLETED

export default function SignUp() {
  const [errorMsg, setErrorMsg] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  async function onSubmit(data) {
    let result = await fetch("http://localhost:3006/api/v1/user/register", {
      method: "post",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    result = await result.json();
    console.log(result);
  }

  return (
    <>
      <Navbar />
      <div className="sign-up">
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Register a new account.</h1>
          <div className="name-inputs">
            {/* comment */}
            <input
              {...register("firstName")}
              type="text"
              placeholder="FIRST NAME"
            />
            <input
              {...register("lastName")}
              type="text"
              placeholder="LAST NAME"
            />
          </div>
          <select {...register("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
            {...register("phoneNumber", {
              pattern: {
                value: /^01[0125][0-9]{8}$/gm,
                message: "Entered value does not match egyptian number format",
              },
            })}
            type="text"
            placeholder="PHONE NUMBER"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="PASSWORD"
          />
          <input
            input
            {...register("confirm_password", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  setErrorMsg("Your passwords do no match");
                } else setErrorMsg("");
              },
            })}
            type="password"
            placeholder="CONFIRM PASSWORD"
          />
          {errorMsg}
          <button onClick={handleSubmit}>Resgiter</button>
          {/* comment */}
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
