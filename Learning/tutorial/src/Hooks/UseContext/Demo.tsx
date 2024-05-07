import React, { useState, createContext, useContext } from "react";
interface UserContextType {
  user: string;
  updateUser: (newName: string) => void;
}
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const UserContext = createContext<UserContextType | undefined>(undefined);

function Component1() {
  const [user, setUser] = useState<string>("Rakesh");

  const updateUser = (newName: string) => {
    setUser(newName);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
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
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Update Name</button>
      </form>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </>
  );
}

export default function Demo() {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Component1 />
      </ThemeContext.Provider>
    </div>
  );
}
