import React from "react";
import { useContext } from "react";
import { UserContext } from "./Demo";
import Component5 from "./Component5";
const Component4: React.FC = () => {
  const {user}=useContext(UserContext)!;
  return (
    <>
      <h1>{`Component 4 ${user}`}</h1>
      <Component5 />
    </>
  );
};

export default Component4;
