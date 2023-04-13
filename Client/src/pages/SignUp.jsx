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

  function onSubmit(data) {
    // const formData = new FormData();
    // formData.append("file", data.file[0]);

    // let response = await fetch("http://localhost:3006/api/v1/user/register", {
    //   method: "post",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //   },
    // });
    // const result = await response.json();
    console.log(data);
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
          <div className="gender-picture">
            <select {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input {...register("image")} type="file" />
          </div>
          <input
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
                message: "Entered value does not match email format",
              },
            })}
            placeholder="EMAIL"
            accept="image/png, image/gif, image/jpeg"
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
          {errors.phoneNumber && (
            <p className="error">{errors.phoneNumber.message}</p>
          )}
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
          <input
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
          <p className="error">{errorMsg}</p>
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
