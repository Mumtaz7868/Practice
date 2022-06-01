import { Button } from "@material-ui/core";
import React from "react";
import productService from "./services/ProductService";
import { withRouter } from "react-router";
const SinglePorduct = (props) => {
  let { product, onDelete } = props;
  return (
    <div>
      <h3>{product.name}</h3>
      <h5>{product.price}</h5>
      {/* <button>seve</button> */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Update product" + product._id);
          // console.log(props);
          props.history.push("/products/update/" + product._id);
        }}
      >
        Update
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          productService
            .deleteProdct(product._id)
            .then((res) => {
              onDelete();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        delete
      </Button>
      <hr />
    </div>
  );
};

export default withRouter(SinglePorduct);
