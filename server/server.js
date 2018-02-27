const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(JSON.stringify(doc, null, 2));
    }, (err) => {
        res.status(400).send('Unable to save todo.');
    })
})

app.listen(3000, () => {
    console.log('App is listening on port 3000');
})