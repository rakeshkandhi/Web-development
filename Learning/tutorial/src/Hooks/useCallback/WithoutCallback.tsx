import React, { useState } from "react";

const ChildComponent: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  alert("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default ParentComponent;


// 9494170650