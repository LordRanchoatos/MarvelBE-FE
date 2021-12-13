import express from "express";
import { data } from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
