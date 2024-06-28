import React, { useState } from "react";

interface NoteProps {
  id: number;
  content: string;
  deleteFunc: (id: number) => void;
  updateFunc: (id: number, payload: { content: string }) => void;
}

const Notes: React.FC<NoteProps> = ({
  id,
  content,
  deleteFunc,
  updateFunc,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [updateContent, setUpdateContent] = useState<string>(content);

  const handleEditToggle = () => {
    setEdit(!edit);
    setUpdateContent(content); 
  };

  const handleUpdateNote = () => {
    updateFunc(id, { content: updateContent });
    setEdit(false); 
  };

  return (
    <div key={id} className="note-container">
      {!edit ? (
        <div className="note-view">
          <h3>{content}</h3>
          <button className="btn btn-danger" onClick={() => deleteFunc(id)}>
            Delete
          </button>
          <button className="btn btn-success" onClick={handleEditToggle}>
            Edit
          </button>
        </div>
      ) : (
        <div className="note-edit">
          <input
            type="text"
            className="form-control"
            value={updateContent}
            onChange={(e) => setUpdateContent(e.currentTarget.value)}
          />
          <button className="btn btn-primary" onClick={handleUpdateNote}>
            Update
          </button>
          <button className="btn btn-secondary" onClick={handleEditToggle}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Notes;
