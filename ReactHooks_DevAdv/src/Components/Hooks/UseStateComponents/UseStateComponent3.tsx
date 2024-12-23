import { useState } from "react";
import "./UseStateComponent.scss";

// Function to initialize the state.
function countInitial() {
  console.log("run countInitial");
  return 4;
}

export const UseStateComponent3 = () => {
  // Using useState with countInitial() directly initializes the state with the return value of countInitial.
  // However, this means that countInitial will be called every time the component renders,
  // which can lead to performance issues, especially if the initialization involves heavy calculations.
  // It is generally recommended to use a function to initialize state to avoid this behavior.
  const [count, setCount] = useState(countInitial());

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="use-state-component-container">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
