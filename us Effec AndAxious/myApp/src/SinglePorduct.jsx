import React from "react";
const SinglePorduct = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <button>seve</button>
    </div>
  );
};

export default SinglePorduct;
