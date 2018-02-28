const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a953aa602cff4902c75658d'

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found')
    }
    console.log(`User by ID: ${user}`);
}).catch((err) => {
    console.log(err);
})