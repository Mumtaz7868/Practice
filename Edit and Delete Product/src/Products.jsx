import React, { useState, useEffect } from "react";
import SinglePorduct from "./SinglePorduct";
// import axios from "axios";
import productService from "./services/ProductService";
import {
  Grid,
  Fab,
  makeStyles,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { toast } from "react-toastify";

const Products = (props) => {
  const useStyles = makeStyles((theme) => ({
    addBtn: {
      position: "fixed",
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log("Component rendered");
  const getProducts = () => {
    setLoading(true);
    productService
      .getAllProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(getProducts, []);
  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.addBtn}
        onClick={() => {
          props.history.push("/products/add");
          console.log("Add Product");
        }}
      >
        <AddIcon />
      </Fab>
      <h1>All Products</h1>

      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container spasing={3}>
        {products.map((data, index) => {
          return (
            <Grid item xs={3}>
              <SinglePorduct
                key={index}
                product={data}
                onDelete={getProducts}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
