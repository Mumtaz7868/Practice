const express = require("express");
const app = express();
let products = ["Shampo", "Dove"];

app.use(express.json());

//default
app.get("/", function (req, res) {
  res.send("hello word I am here");
});

// get all
app.get("/api/products", function (req, res) {
  res.send(products);
});
// getOne
app.get("/api/products/:id", function (req, res) {
  res.send(products[req.params.id]);
});

// post data
app.post("/api/products", function (req, res) {
  var data = req.body;
  products.push(data.name);
  res.send(data.name);
  // res.send ("prducts Created");
});
// put data
app.put("/api/products/:id", function (req, res) {
  var data = req.body;
  console.log(data);
  products[req.params.id] = data.name;
  res.send(data.name);
});
// delete data
app.delete("/api/products/:id", function (req, res) {
  var product = products[req.params.id];
  products.splice(req.params.id, 2);

  res.send(product);
  // res.send ("products created");
});
app.listen(8080);
