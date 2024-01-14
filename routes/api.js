const express = require('express');
const router = express.Router();

const { saveNote } = require('../actions/api/notes');

router.get('/', saveNote);

module.exports = router;
