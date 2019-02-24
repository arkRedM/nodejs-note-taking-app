var express = require('express');

const NoteData = require('../models/notes');

var router = express.Router();


router.get('/add', (req, res) => {
    res.render("notes", {"title": "Add Notes"})
});

router.get('/list', (req, res) => {
    NoteData.find().then(results => {
        res.send(results);
    }).catch(e => console.log(e))
});

router.post('/add', (req, res) => {
    console.log(req.body);
    // res.send("hjkl");
    NoteData.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description
    }).then(result => {
        res.json(result);
    }).catch(e => {
        res.json({ error: e.message });
    });

    NoteData.find().then(results => {
        console.log(results);
    }).catch(e => console.log('Some error occured'));
});

module.exports = router;