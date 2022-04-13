const express = require("express");
const app = express();

const Course = require("./Models/Course");
app.listen(8081);
const mongoose = require("mongoose");
const Author = require("./Models/Author");

mongoose
  .connect("mongodb://localhost/jamiaDB1")
  .then(async () => {
    console.log("DB connected");
    let author = new Author();
    author.name = "Mumtaz";
    author.email = "mumtazkhang7868@gmail.com";
    author.age = 22;
    author = await author.save();
    let course = new Course();
    course.title = "MERN";
    course.author = {
      name: "Mumtaz",
      age: 22,
      email: "mumtazkhang7868@gmail.com",
    };
    course.authorRelation = author._id;
    course = await course.save();
    // console.log(course);
    let data = await Course.find({ title: "MERN" }).populate("authorRelation");
    console.log(data);
  })
  .catch((error) => {
    console.log("Error connecting db");
    console.log(error);
  });
