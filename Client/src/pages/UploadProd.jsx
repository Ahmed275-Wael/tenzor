import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./page-style/uploadprod.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UploadProd() {
  // const [uploadSuccess, setUploadSuccess] = useState(false);
  const history = useHistory();

  //Get user data signed in from session storage
  const userData = JSON.parse(sessionStorage.getItem("user"));

  //Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    let response = await fetch("http://localhost:3006/api/v1/product", {
      method: "post",
      body: JSON.stringify({
        ...data,
        methodOfPayment: 0,
        discount: 0,
        userId: userData.id,
        image: "mazona",
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const result = await response.json();
    console.log(result.status);
    if (result.status === "success") {
      history.push("/");
    }
  }

  return (
    <>
      <Navbar />
      <form className="upload-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>UPLOAD YOUR PRODUCT HERE</h1>
        <input
          {...register("name", {
            required: {
              value: true,
              message: "The name of the product is reqiured",
            },
          })}
          className="upload-name"
          type="text"
          placeholder="PRODUCT NAME"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <input {...register("image")} className="upload-image" type="file" />
        <input
          {...register("price", {
            required: {
              value: true,
              message: "Please enter a price",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "The price must be a number",
            },
          })}
          className="upload-price"
          type="text"
          placeholder="PRICE"
        />
        {errors.price && <p className="error">{errors.price.message}</p>}
        {/* <input
          {...register("methodOfPayment")}
          className="method-upload"
          type="text"
        /> */}
        <textarea
          {...register("description", {
            required: {
              value: true,
              message: "Any product must have a desription ya negm",
            },
          })}
          className="desc-upload"
          type="text"
          placeholder="Type ur description here plsss"
        />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}
        <button type="submit">Upload</button>
      </form>
      <Footer />
    </>
  );
}
