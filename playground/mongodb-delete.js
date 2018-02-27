const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    
    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: "Wash the cat"
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5a951a16a7d453194d0437a8")
    }).then((result) => {
        console.log(JSON.stringify(result, null, 2));
    })

    // db.collection('Users').deleteMany({
    //     name: 'Bogdan Posedaru'
    // }).then((result) => {
    //     console.log(JSON.stringify(result, null, 2));
    // })

    // db.close();
});