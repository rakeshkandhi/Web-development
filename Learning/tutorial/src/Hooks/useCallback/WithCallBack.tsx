import React, { useState, useCallback, memo } from "react";

const ChildComponent: React.FC<{ onClick: () => void }> = memo(
  ({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click Me</button>;
  }
);

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default ParentComponent;
