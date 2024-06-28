import React, { useState } from "react";
import Child from "./Child";
import "./Parent.css";

const Parent: React.FC = () => {
  const [dataFromChild, setDataFromChild] = useState<string>("");
  const handleDataFromChild = (data: string) => {
    setDataFromChild(data);
  };

  return (
    <div className="parent">
      <h1 className="parent-heading">Parent Component</h1>
      <Child onDataToParent={handleDataFromChild} />
      <p>Data From Child: {dataFromChild}</p>
    </div>
  );
};

export default Parent;
