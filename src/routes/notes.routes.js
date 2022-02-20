const { Router } = require("express");


const {
  renderNotesForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNotes,
  deleteNote
} = require("../controllers/notes.controller");

const router = Router();

//new note
router.get("/notes/add", renderNotesForm);

router.post("/notes/new-note", createNewNote);

//get all note
router.get("/notes", renderNotes)

//edit notes
router.get("/notes/edit/:id", renderEditForm) //metodo get para obtener

router.put("/notes/edit/:id", updateNotes) //metodo post para actualizar

//delete notes
router.delete("/notes/delete/:id", deleteNote)

module.exports = router;
