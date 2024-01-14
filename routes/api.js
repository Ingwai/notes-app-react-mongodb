const express = require('express');
const router = express.Router();
const noteActions = require('../actions/api/noteActions');

const { saveNote, getAllNotes, getNote, updateNote, deleteNote } = noteActions;

// pobieranie notatek z bazy
router.get('/notes', getAllNotes);

// pobieranie notatki z bazy
router.get('/notes/:id', getNote);

// zapisywanie notatek z bazy
router.post('/notes', saveNote);

// edytowanie notatek z bazy
router.put('/notes/:id', updateNote);

// kasowanie notatek z bazy
router.delete('/notes/:id', deleteNote);

module.exports = router;
