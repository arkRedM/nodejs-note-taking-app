/*
    Express in a module or a framework build on the top of node.js
    Express provides a minimal interface to build our applications. 
    It provides us the tools that are required to build our app.
    It is flexible as there are numerous modules available on npm,
    which can be directly plugged into Express.
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* db */
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://user:<PASSWORD>@cluster0-hsnw0.mongodb.net/test?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// static
app.use(express.static('public'));
app.set('view engine', 'ejs');

// notes routes
const notesRoutes = require('./routes/notes');
app.use('/notes', notesRoutes);

// 404
app.get('*', function(req, res){
    return res.render('404')
});

app.listen(8000);