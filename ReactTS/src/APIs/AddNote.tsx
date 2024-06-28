import React from "react";
interface saveProps {
  input: string;
  saveInput: (inp: string) => void;
  onSave: (payload: string) => void;
}

const AddNote: React.FC<saveProps> = ({input, onSave ,saveInput}) => {

  const handleclick = () => {
    input !== "" ? onSave(input) : alert("The Content shouldn't be empty");
    saveInput("");
  };
  return (
    <div>
      <input
      style={{ maxWidth: "300px" }}
      className="form-control"
        type="text"
        value={input}
        onChange={(e) => saveInput(e.target.value)}
      />
      <button className="btn btn-dark" onClick={handleclick}>Save</button>
    </div>
  );
};

export default AddNote;
