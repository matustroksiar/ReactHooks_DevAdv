import { useState } from "react";

function countInitial3() {
  alert("run countInitial3");
  return 4;
}

export const DemoUseStateComponent = () => {
  // useState is a React Hook that lets you add a state variable to your component.
  // use state hook can be used onl on function componentsst not in class componets

  //   if (true) {
  //     useState() // Error - React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.
  //   }
  //    useState - cannot be put ionside if statement, fucntions, loops, cannot be nested in anythiong
  //    useState - must be in the top level of functional component (always called in the exact same order)

  //   useState(default state)
  //   useState(4)

  //   const arr = useState(4) // - returns array with 2 values
  //   const [count, setCount] = arr - destructuring the array
  // first value is the state variable
  // second value is function that updated the current state
  // setCount - update the state and rerender component
  // useState(4) is called every time a componet is rendered
  const [count, setCount] = useState(4);

  //   const [count, setCount] = useState(4);
  // useState(4) is called every time is this compomnent redered
  // so if there wil be some heavy calculations it can affect performance adn speed of oru component adn aplication

  // this function version of useState runs only once when the component renders
  const [count2, setCount2] = useState(() => {
    alert("first run of setCount2");
    return 4;
  });

  // useState(countInitial3()) this is going to be called every time a componet is rendered
  const [count3, setCount3] = useState(countInitial3());

  const decrementCount = () => {
    // setCount(count - 1); // this is incorect way how to update the value based on the previous value
    // in case tthere will be setCount(count - 1) used like this
    // setCount(count - 1)
    // setCount(count - 1)
    // expected result will be previous state - 2 but actual result is prev -1

    // setCount((previous state) => logic);

    // add documentatiéon
    setCount((prevCount) => prevCount - 1);
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount2 = () => {
    setCount2((prevCount) => prevCount - 1);
  };

  const increaseCount2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const decrementCount3 = () => {
    setCount3((prevCount) => prevCount - 1);
  };

  const increaseCount3 = () => {
    setCount3((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="demo-container">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <div className="demo-container">
        <button onClick={decrementCount2}>-</button>
        <span>{count2}</span>
        <button onClick={increaseCount2}>+</button>
      </div>
      <div className="demo-container">
        <button onClick={decrementCount3}>-</button>
        <span>{count3}</span>
        <button onClick={increaseCount3}>+</button>
      </div>
    </>
  );
};
