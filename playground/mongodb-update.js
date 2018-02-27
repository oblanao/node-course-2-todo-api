const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a9524576b44c129ec251480")
    // }, {
    //     $set: {
    //         completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //     console.log(JSON.stringify(result, null, 2));
    // })

    // users, filter by id, update to my name. use $inc to increment age.
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a951ae79c276519a12fe6d8')
    },{
        $set: {
            name: 'Bogdan Posedaru'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, null, 2));
    })

    // db.close();
});