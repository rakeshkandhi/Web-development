const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

let notes = [];
app.get("/todo", (req, res) => {
  res.json(notes);
});

app.post("/todo", (req, res) => {
  const { content } = req.body;
  const newNote = { id: notes.length + 1, content: content };
  notes.push(newNote);
  res.json(newNote);
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== parseInt(id));
  res.sendStatus(204);
});

app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const index = notes.findIndex((note) => note.id === parseInt(id));
  if (index !== -1) {
    notes[index].content = content;
    res.json(notes[index]);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
