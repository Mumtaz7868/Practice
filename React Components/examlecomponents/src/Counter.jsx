import { React } from "react";

const Counter = ({ counter, setCounter }) => {
  // var counter = 0;
  // const counter = props.counter;
  // const setCounter = props.setCounter;

  const handleIncreament = () => {
    setCounter(counter + 1);
  };
  const handleDecreament = () => {
    setCounter(counter - 1);
  };
  return (
    <div style={{ padding: "60px", fontSize: "3rem" }}>
      <button onClick={handleIncreament}>++</button>

      {counter}
      <button onClick={handleDecreament}>--</button>
    </div>
  );
};

export default Counter;
