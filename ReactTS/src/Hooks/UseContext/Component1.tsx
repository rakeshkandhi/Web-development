import React, { useState} from "react";
import { UserContext } from "./Demo";
import Component2 from "./Component2";
const Component1: React.FC = () => {
  const [user, setUser] = useState<string>("Rakesh");

  const updateUser = (newName: string) => {
    setUser(newName);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;
