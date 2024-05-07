import React, { useState, createContext } from "react";
import Component1 from "./Component1";
interface UserContextType {
  user: string;
  updateUser: (newName: string) => void;
}
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const Demo: React.FC = () => {
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
};
