import React from "react";

//Header component
const Header: React.FC = () => {
  const navbar: string[] = ["Home", "About", "Contact", "Login", "Logout"];
  return (
    <>
      <h1>My Website</h1>
      <ul>
        {/* Render an unordered list for the navbar
         */}
        {navbar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};

export default Header;
