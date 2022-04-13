const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { CreateProduct } = require("./productsOpration");

app.use(express.json());

mongoose
  .connect("mongodb://localhost/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((async) => {
    console.log("connection to Mongodb created");
    await CreateProduct();
  })
  .catch((error) => {
    console.log("error connecting ");
    console.log(error);
  });
app.listen(3000);
