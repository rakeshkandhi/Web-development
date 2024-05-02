import React from "react";

interface Props {
  name?: string;
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <header>
      <h1>{name ? name : "Contact Manager"}</h1>
    </header>
  );
};

export default Header;
