import React, { useReducer } from "react";

interface State {
    count: number;
}

interface Action {
  type: "increment" | "decrement" | "reset";
  payload?: number;
}

const initialState = { count: 0 };

function reducer(state:State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
      Count: {state.count}
      <br />
      <button className="btn" onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button className="btn" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button className="btn" onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;