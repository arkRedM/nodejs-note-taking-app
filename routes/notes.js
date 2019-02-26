var express = require('express');

const NoteData = require('../models/notes');

var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/notes/add');
});

router.get('/add', (req, res) => {
    res.render("notes_add", {title: "Add Notes"})
});

router.get('/list', (req, res) => {
    NoteData.find().then(results => {
        res.render(
            "notes_list",
            {
                title: "List Notes",
                notes_list: results
            }
        );
    }).catch(e => console.log(e))
});

router.post('/add', (req, res) => {
    NoteData.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description
    }).then(results => {}).catch(e => {
        console.log(e);
    });

    NoteData.find().then(results => {
        console.log(results);
    }).catch(e => console.log(e));

    res.redirect('/notes/list');
});

router.post('/delete', (req, res) => {
    NoteData.deleteOne({'title': req.body.title}).then(results => {});
    res.redirect('/notes/list');
});

module.exports = router;