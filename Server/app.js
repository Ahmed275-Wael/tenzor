const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config({ path: "./config.env" });
var cors = require("cors");
process.on("uncaughtException", (err) => {
  console.log(err);
});
const app = express();
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const productRoute = require("./routes/productRoute");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/product", productRoute);

app.use((err, req, res, next) => {
  console.log(err);
  res.json(err);
});
app.listen(3006, () => {
  console.log("Connected To Server...");
});
