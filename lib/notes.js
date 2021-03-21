const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

function createNote(body, notes) {
  const note = body;
  note.id = uuidv4();
  console.log(notes);
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify(notes, null, 2)
  );
  return note;
}

function deleteNote(id, notes) {
  const update = notes.filter((note) => note.id !== id);
  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify(update, null, 2)
  );
  return update;
}

module.exports = { createNote, deleteNote };
