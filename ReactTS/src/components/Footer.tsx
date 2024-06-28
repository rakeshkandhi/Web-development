import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <p>
        &copy; {new Date().toLocaleString("default", { month: "short" })}-
        {new Date().getFullYear()} By Vite
      </p>
    </>
  );
};

export default Footer;
