import React, { useState, useEffect } from "react";
import axios from "axios";
import AddNote from "./AddNote";
import Notes from "./Notes";
export interface NoteProps {
  id?: number;
  content: string;
}

export const FetchDemo: React.FC = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  async function getAllNotes() {
    try {
      const response = await axios.get("http://localhost:3001/todo", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      const { data } = response;
      console.log(`Returned with status code ${response.status}`);
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  useEffect(() => {
    getAllNotes();
  }, []);

  async function saveNote(payload: string) {
    try {
      const response = await axios.post(
        "http://localhost:3001/todo",
        // json data
        {
          content: payload,
        },
        // headers and content type
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );
      console.log(response.data);
      setInputValue("");
    } catch (error) {
      console.error("Error saving note:", error);
    }
    getAllNotes();
  }

  async function deleteNote(id: number) {
    try {
      await axios.delete(`http://localhost:3001/todo/${id}`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
    getAllNotes();
  }

  async function updateNote(id: number, payload: { content: string }) {
    try {
      await fetch(`http://localhost:3001/todo/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
    getAllNotes();
  }
  {
    /*
  <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={saveNote}>Add Note</button>
      <ul>
        {notes.length == 0 && <li>No notes</li>}{" "}
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
      */
  }
  return (
    <div>
      <h1>Notes App with Axios</h1>
      <div
        className="input-group mb-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <AddNote onSave={saveNote} />
        <ul>
          {notes.length == 0 ? (
            <li>No notes....</li>
          ) : (
            notes.map((note, index) => {
              return <li key={index}>
                <Notes id={note.id} content={note.content} deleteFunc={deleteNote} updateFunc={updateNote}/>;
                </li>
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default FetchDemo;
