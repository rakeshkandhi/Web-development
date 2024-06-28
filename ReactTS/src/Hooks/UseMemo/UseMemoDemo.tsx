import React, { useState, useMemo } from "react";
import { ChildComponent } from "./ChildComponent";

export const UseMemoDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(ChildComponent);

  // without useMemo
  // const selectedItems = items.find((item) => item.isSelected);

  // with useMemo
  const selectedItems = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected item: {selectedItems?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseMemoDemo;
