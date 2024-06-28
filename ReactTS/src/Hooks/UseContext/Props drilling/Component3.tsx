import React from "react";
import {Props} from './Component2'

const Component3: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Component 3</h1>
      <input
        type="text"
        value={props.username}
        onChange={(e) => props.setName(e.target.value)}
      />
    </div>
  );
};

export default Component3;
