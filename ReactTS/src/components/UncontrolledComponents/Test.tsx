import { useState } from "react";

export default function Test() {
  let editingTestName = "";
  const [testName, setTestName] = useState("");

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    editingTestName = event.target.value;
  }

  function handleClick() {
    setTestName(editingTestName);
  }

  return (
    <section>
      <h2>Welcome {testName ? testName : "unknown entity"}</h2>
      <p>
        <input type="text" required onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}