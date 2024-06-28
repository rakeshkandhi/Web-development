import React, { useReducer } from "react";

interface State {
  count: number;
}

interface Action {
  type: "increment" | "decrement" | "reset";
  payload?: number;
}

const initialState = { count: 0 };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload! || 1 };
    case "decrement":
      return { count: state.count - action.payload! || 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
}

const Counter: React.FC<{ value?: string }> = ({ value = "1" }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
      Count: {state.count}
      <br />
      <button
        className="btn btn-dark"
        onClick={() =>
          dispatch({ type: "increment", payload: parseInt(value) })
        }
      >
        Increment
      </button>
      <button
        className="btn btn-dark"
        onClick={() =>
          dispatch({ type: "decrement", payload: parseInt(value) })
        }
      >
        Decrement
      </button>
      <button
        className="btn btn-dark"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
