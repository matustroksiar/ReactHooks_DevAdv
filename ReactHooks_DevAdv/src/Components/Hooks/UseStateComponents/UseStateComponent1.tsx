import { useState } from "react";

export const UseStateComponent1 = () => {
  // useState is a React Hook that lets you add a state variable to your component.
  // The useState hook can only be used in function components, not in class components.

  // You cannot call Hooks inside conditions. They must be called in the same order at the top level
  // of your component to ensure consistent behavior between renders.
  // Example of incorrect usage:
  // if (true) {
  //   useState(); // Error - React Hook "useState" is called conditionally.
  // }

  // useState must be called at the top level of the component.
  // It cannot be called inside loops, conditions, or nested functions.

  // Initialize state with a default value
  // useState(default state value)
  // Example:
  // useState(4) initializes state with the value 4

  // useState returns an array with two elements:
  // 1. The current state value
  // 2. A function to update the state
  // You can destructure this array into separate variables
  const [count, setCount] = useState(4); // Initializes state variable 'count' with 4

  const decrementCount = () => {
    // setCount(count - 1); // Incorrect way to update state based on the previous value
    // This could lead to unexpected behavior if called multiple times in quick succession.
    // Example:
    // setCount(count - 1);
    // setCount(count - 1);
    // Expected result: previous state - 2
    // Actual result: previous state - 1

    // Correct way to update state based on the previous value:
    // Use a function inside setCount to access the previous state value
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1); // Increments the state value by 1
  };

  return (
    <div className="demo-container">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
