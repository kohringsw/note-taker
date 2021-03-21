const router = require("express").Router();
const { createNote, deleteNote } = require("../../lib/notes");
const notes = require("../../db/notes.json");

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get("/notes", (req, res) => {
  console.log(notes);
  res.json(notes);
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
router.post("/notes", (req, res) => {
  const newNote = createNote(req.body, notes);
  res.json(newNote);
});

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
router.delete("/notes/:id", (req, res) => {
  const updateList = deleteNote(req.params.id, notes);
  res.json(updateList);
});

module.exports = router;
