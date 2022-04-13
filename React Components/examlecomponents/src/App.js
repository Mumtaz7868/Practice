import Product from "./Product";
import Counter from "./Counter";
import { useState } from "react";

import "./product.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Counter counter={counter} setCounter={setCounter} />
      <Product title="super biccut" price="50" counter={counter} />
      <Product title="naswar" price="80" counter={counter} />
      <Product title="super gold" price="58" counter={counter} />
    </div>
  );
}

export default App;
