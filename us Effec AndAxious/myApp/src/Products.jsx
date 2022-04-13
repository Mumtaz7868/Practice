import React, { useState, useEffect } from "react";
import SinglePorduct from "./SinglePorduct";
import axios from "axios";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3100/api/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.length == 0 ? (
        error ? (
          <div>Error</div>
        ) : (
          <div>Loding</div>
        )
      ) : (
        <div>
          {products.map((data, index) => {
            return <SinglePorduct key={index} product={data} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
