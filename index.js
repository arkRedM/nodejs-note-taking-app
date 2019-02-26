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

/* DB setup */
let dev_db_url = 'mongo-db-url'; // use standard url obtained from mlab here. alternatively connect to local mongodb server

const mongoose = require('mongoose');
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

//redirect to notes by default
app.get('/', function(req, res){
    return res.redirect('/notes/add')
});

app.listen(8000);