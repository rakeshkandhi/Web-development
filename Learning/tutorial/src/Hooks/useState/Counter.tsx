import React, { useState, useEffect } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [calculation, setCalculation] = useState<number>(0);

  useEffect(() => {
    setCalculation(() => count * count);
  }, [count]);

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        Increase & Calculate
      </button>
      <p>Square: {calculation}</p>
    </div>
  );
};

export default Counter;
