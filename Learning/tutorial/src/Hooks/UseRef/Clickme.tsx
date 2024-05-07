import React, { useRef } from "react";

const Clickme: React.FC = () => {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log("You clicked " + ref.current + " times!");
  }
console.log(ref.current);

  return <button onClick={handleClick}>Click me!</button>;
};

export default Clickme;
