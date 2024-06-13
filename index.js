import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";
import { mongoDBURL } from "./config.js";
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/api/products", productRoute)

mongoose
  .connect(mongoDBURL)
  .catch(() => {
    console.log("Connection was terminated");
  })
  .then(() => {
    console.log("Connected to database");
  });

app.get("/", (req, res) => {
  res.send("Hello Siri, ");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
