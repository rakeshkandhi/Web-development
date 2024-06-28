import React from "react";
import Component3 from "./Component3";

export interface Props {
  username: string;
  setName: (value: string) => void;
}
const Component2: React.FC<Props> = (props) => {
  return (
    <div>
      <Component3 username={props.username} setName={props.setName} />
    </div>
  );
};

export default Component2;
