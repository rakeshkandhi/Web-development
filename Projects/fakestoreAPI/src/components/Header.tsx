import React, { useState } from "react";

const Header: React.FC = () => {
  const [search, setSearch] = useState<string>();
  
  return (
    <div className="Nav-bar">
      <div>
        <h1>Fakestore API</h1>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search for the products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
