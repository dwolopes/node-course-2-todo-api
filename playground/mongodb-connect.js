const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to Mongo DB Server');
    }
    console.log('Connected to MongoDB server');

    db.close();
});