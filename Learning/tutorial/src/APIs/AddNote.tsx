import React, { useState } from "react";
interface saveProps {
  onSave: (payload: string) => void;
}

const AddNote: React.FC<saveProps> = ({ onSave }) => {
  const [query, setQuery] = useState<string>("");

  const handleclick = () => {
    query !== "" ? onSave(query) : alert("The Content shouldn't be empty");
    setQuery("");
  };
  return (
    <div>
      <input
      style={{ maxWidth: "300px" }}
      className="form-control"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-dark" onClick={handleclick}>Save</button>
    </div>
  );
};

export default AddNote;
