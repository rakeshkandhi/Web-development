import React, { useState } from "react";

interface ChildProps {
  onDataToParent: (data: string) => void;
}
const Child: React.FC<ChildProps> = ({ onDataToParent }) => {
  const [inputValue, setInputValue] = useState("");

  const sendDataToParent = () => {
    onDataToParent(inputValue);
  };

  return (
    <div className="child-container">
      <h2 className="child">Child Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter the text"
      />
      <button className="btn" onClick={sendDataToParent}>
        Send Data to Parent
      </button>
    </div>
  );
};

export default Child;
