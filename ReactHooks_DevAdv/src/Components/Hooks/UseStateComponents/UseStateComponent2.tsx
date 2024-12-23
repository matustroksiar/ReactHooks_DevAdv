import { useState } from "react";
import "./UseStateComponent.scss";

export const UseStateComponent2 = () => {
  // The useState hook allows us to add state to our functional component.
  // If we were to initialize the state with a static value like this:
  // const [count, setCount] = useState(4);
  // The useState(4) would be called every time the component renders.
  // This can lead to performance issues, especially if the initialization involves heavy calculations,
  // as it would affect the speed of our component and application.

  // Instead, we use a function to initialize the state. This function will only run once when the component is first rendered,
  // which can improve performance by avoiding unnecessary calculations on subsequent renders.
  const [count, setCount] = useState(() => {
    console.log("first run of setCount");
    return 4;
  });

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
