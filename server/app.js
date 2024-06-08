const express = require("express");
const app = express();
const productRouter = require("../routes/products.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Theatre Backend API");
});

app.use("/categories", productRouter);

app.all("*", (req, res, next) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;
