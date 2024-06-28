import React from "react";

interface ChildProps {
  children: React.ReactNode;
}

const ChildProps: React.FC<ChildProps> = (props) => {
  return <div>{props.children}</div>;
};

export default ChildProps;
