/*
    Express in a module or a framework build on the top of node.js
    Express provides a minimal interface to build our applications. 
    It provides us the tools that are required to build our app.
    It is flexible as there are numerous modules available on npm,
    which can be directly plugged into Express.
*/

const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

const baseRoutes = require('./routes/index');
const bodyParser = require('body-parser');

app.use('/', baseRoutes);

// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('*', function(req, res){
    return res.render('404')
});

app.listen(8000);