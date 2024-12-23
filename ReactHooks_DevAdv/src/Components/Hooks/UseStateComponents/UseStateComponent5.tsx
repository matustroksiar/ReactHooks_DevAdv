import { useState } from "react";
import "./UseStateComponent.scss";

export const UseStateComponent5 = () => {
  // Initializing state variables using two separate useState hooks.
  // The first useState hook manages the count state, initializing it with the value 4.
  const [count, setCount] = useState(4);
  
  // The second useState hook manages the theme state, initializing it with the value "blue".
  const [theme, setTheme] = useState("blue");

  const decrementCount = () => {
    // Updating the count state by decrementing its value.
    setCount((prevCount) => prevCount - 1);
    
    // Updating the theme state to "green".
    setTheme('green');
  };

  const incrementCount = () => {
    // Updating the count state by incrementing its value.
    setCount((prevCount) => prevCount + 1);
    
    // Updating the theme state to "red".
    setTheme('red');
  };

  return (
    <div className="use-state-component-container">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
