import React from "react";

const ChildRef = React.forwardRef<HTMLInputElement, { name?: string }>(
  ({ name }, ref) => {
    return (
      <div>
        {name && <h1 style={{ color: "#169e7d" }}>{name}</h1>}
        <input type="text" ref={ref} name="" id="" />
      </div>
    );
  }
);

export default ChildRef;
