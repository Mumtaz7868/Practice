import { Button, Fab, Grid, TextField } from "@material-ui/core";
// import * as MUI from "@material-ui/core";
import React, { useEffect, useState } from "react";
import productService from "./services/ProductService";

const UpdateProduct = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const id = props.match.params.id;

  useEffect(() => {
    productService
      .getSingleProduct(props.match.params.id)
      .then((res) => {
        setName(res.name);
        setPrice(res.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const UpdateProductClick = () => {
    productService
      .UpdateProduct(id, { name, price })
      .then(() => {
        props.history.push("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <h1>update Add New Product</h1>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField
              label="Price"
              fullWidth
              value={price}
              type="number"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "5px" }}
              onClick={UpdateProductClick}
            >
              Update Product
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </div>
  );
};
export default UpdateProduct;
