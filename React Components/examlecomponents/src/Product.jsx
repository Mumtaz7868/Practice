import React from "react";

function Product(props) {
  var title = props.title;
  var price = props.price;
  const counter = props.counter;
  var prodPriceCss = price <= 50 ? "cheapprod" : "expenciveProd";
  return (
    <div>
      <h1 style={{ color: "red" }}>Produc Title: {title}</h1>
      {counter}
      <h3 className={prodPriceCss}>Product Price:{price}</h3>
      <p className="product">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        assumenda nisi, aspernatur pariatur ipsa earum illum numquam vel eius
        dicta culpa sunt eligendi? Ea perspiciatis debitis sequi, esse a illo.
      </p>
    </div>
  );
}

export default Product;
