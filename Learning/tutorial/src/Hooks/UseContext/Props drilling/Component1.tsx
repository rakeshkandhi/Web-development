import React, { useState } from "react";
import Component2 from "./Component2";

const Component1: React.FC = () => {
  const [name, setName] = useState<string>("Rakesh");
  return (
    <div>
      <h1>Hello</h1>
      <Component2 username={name} setName={setName} />
      <span>From the Component 1:{name}</span>
    </div>
  );
};

export default Component1;
