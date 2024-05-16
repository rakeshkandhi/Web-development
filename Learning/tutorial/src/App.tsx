import React, { useState } from "react";
import Counter from "./Hooks/UseReducer/counter";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the number"
      />
      {input ? <Counter value={input} /> : <Counter />}
    </div>
  );
};

export default App;
