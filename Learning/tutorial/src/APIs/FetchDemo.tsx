import React, { useState, useEffect } from "react";

interface NoteProps {
  id: number;
  content: string;
}

export const FetchDemo: React.FC = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

 async function getAllNotes() {
   try {
     const res = await fetch("https://localhost:3001/todo",{
      mode: "no-cors",
     });
     if (!res.ok) {
       throw new Error("Failed to fetch notes");
     }
     const data = await res.json();
     setNotes(data);
   } catch (error) {
     console.error("Error fetching notes:", error);
   }
 }

  useEffect(() => {
    getAllNotes();
  }, []);

  function saveNote() {
    fetch("https://localhost:3001/todo", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({ content: inputValue }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) =>{
        res.status === 201 && res.json();
      })
      .then((data) => setNotes([...notes, data]));
    setInputValue("");
    console.log("saveNote", inputValue);
  }

  async function deleteNote(id: number) {
    await fetch(`https://localhost:3001/todo/${id}`, {
      method: "DELETE",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    setNotes(notes.filter((note) => note.id !== id));
    console.log("deleteNote", id);
  }

  async function updateNote(id: number, payload: { content: string }) {
    await fetch(`https://localhost:3001/todo/${id}`, {
      method: "PUT",
      mode: "no-cors",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content: payload.content } : note
    );
    setNotes(updatedNotes);
    setEditId(null);
    console.log("updateNote", payload, id);
  }

  return (
    <div>
      <h1>Notes</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={saveNote}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {editId === note.id ? (
              <>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  onClick={() => updateNote(note.id, { content: inputValue })}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                {note.content}
                <button onClick={() => deleteNote(note.id)}>Delete</button>
                <button onClick={() => setEditId(note.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDemo;
