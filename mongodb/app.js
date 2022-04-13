const express = require("express");
const app = express();
const Human = require("./Models/Human");
app.listen(8081);
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/jamiaDB")
  .then(async () => {
    console.log("DB connected");

    // **********Find***********//
    // let result = await Human.find({ name: "Mumtaz" });
    // console.log(result);

    //***********Create********//
    // let myhuman = new Human();
    // myhuman.name = "Mumtaz khan";
    // myhuman.age = 22;
    // myhuman.gender = true;
    // await myhuman.save();
    // console.log(myhuman);

    //**********Update**********//
    // let result = await Human.findByIdAndUpdate("6228772f4f3c1c780c3cc354", {
    //   gender: false,
    //   name: "New Mumtaz",
    // });
    // console.log(result);

    // ********Delete**********//
    //   let result = await Human.findByIdAndDelete("6229cab0a8d9c613cc00fd2b");
    //   console.log(result);
  })
  .catch((error) => {
    console.log("Error connecting db");
    console.log(error);
  });
