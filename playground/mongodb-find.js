const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    // db.collection('Todos').find({
    //     _id: new ObjectID("5a95194661e66f18eaf3303f")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, null, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // })

    db.collection('Users').find({
        name: 'Bogdan Posedaru'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, null, 2));
    }, (err) => {
        console.log(err);
    })

    db.close();
});