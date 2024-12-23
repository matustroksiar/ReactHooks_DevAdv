import { useState } from "react";
import "./UseStateComponent.scss";

export const UseStateComponent4 = () => {
  // Initializing state with an object containing two properties: count and theme.
  // The initial state is { count: 4, theme: "blue" }
  const [state, setState] = useState({ count: 4, theme: "blue" });

  // Extracting count and theme from the state object for easier access.
  const count = state.count;
  const theme = state.theme;

  const decrementCount = () => {
    setState((prevState) => {
      // Returning a new state object with the updated count value.
      // The spread operator (...) is used to copy the existing properties of the state object.
      // Only the count property is updated.
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  const incrementCount = () => {
    setState((prevState) => {
      // Returning a new state object with the updated count value.
      // The spread operator (...) is used to copy the existing properties of the state object.
      // Only the count property is updated.
      return { ...prevState, count: prevState.count + 1 };
    });
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
