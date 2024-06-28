import React from "react";
import { useContext, useState } from "react";
import { ThemeContext,UserContext } from "./Demo";
const Component5: React.FC = () => {
  const { user, updateUser } = useContext(UserContext)!;
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const [newName, setNewName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(newName);
    setNewName("");
  };

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="btn"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button className="btn" type="submit">Update Name</button>
      </form>
      <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </>
  );
};

export default Component5;
