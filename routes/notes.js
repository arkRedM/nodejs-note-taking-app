var express = require('express');
var router = express.Router();
const path = require('path');

const NoteData = require('../models/notes');


router.get('/notes/add', (req, res) => {
    res.render("notes", {"title": "Add Notes"})
});

router.post('/notes/add', (req, res) => {
    NoteData.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        notes: req.body.notes
    })
});



module.exports = router;