var express = require("express");
var router = express.Router();
const { Product } = require("../../models/Product");
const { validateProduct } = require("../../models/Product");

/* GET users listing. */
router.get("/", async function (req, res) {
  try {
    console.log(req.query);
    let page = Number(req.query.page);
    let perPage = Number(req.query.perPage);

    page = (page - 1) * perPage;
    console.log(page, perPage);

    let result = await Product.find().skip(page).limit(perPage);

    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});
router.get("/:id", async function (req, res) {
  try {
    console.log(req.query);
    let page = Number(req.query.page);
    let perPage = Number(req.query.perPage);
    page = (page - 1) * perPage;
    console.log(page, perPage);

    let result = await Product.find().skip(page).limit(perPage);

    if (!result) {
      res.status(400).send("Product with Given id not found");
    }

    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});
router.post("/", async function (req, res) {
  try {
    let { error } = validateProduct(req.body);
    if (error) {
      res.status(400).send(error.message);
    }
    let result = new Product();
    result.name = req.body.name;
    result.price = req.body.price;
    result = await result.save();

    // if(!result){
    //   res.status(400).send("Product with Given id not found");
    // }

    res.send(error);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
  // res.send("create  products with data" + req.body);
});
router.put("/:id", async function (req, res) {
  try {
    let result = await Product.findById(req.params.id);
    if (!result) {
      res.status(400).send("The record with Given id not found");
    }
    result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});
router.delete("/:id", async function (req, res) {
  try {
    let result = await Product.findById(req.params.id);
    if (!result) {
      res.status(400).send("product with Given id not found");
    }
    result = await Product.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});
module.exports = router;
