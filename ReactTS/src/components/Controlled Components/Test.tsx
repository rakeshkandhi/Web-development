import { useState } from "react";

interface TestProps {
  initialName: string;
}

export const Test: React.FC<TestProps> = ({ initialName }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [testName, setTestName] = useState(initialName);

  function clickHandler() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTestName(event.target.value);
  }
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={style}>
      {isEditing ? (
        <input
          style={{ width: "fit-content" }}
          className="form-control"
          type="text"
          required
          value={testName}
          onChange={handleChange}
        />
      ) : (
        <h3>{testName}</h3>
      )}
      <button
        className="btn"
        style={{ width: "fit-content" }}
        onClick={clickHandler}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Test;
