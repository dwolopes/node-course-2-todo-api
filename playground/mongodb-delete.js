const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to Mongo DB Server');
    }
    console.log('Connected to MongoDB server'); 

/*      db.collection('Users').deleteMany({name: 'Andrew' }).then((result) => {
        console.log(result);
    }) */

/*     db.collection('Todos').deleteOne({text: 'eat lunch' }).then((result) => {
        console.log(result);
    }) */

    db.collection('Users').findOneAndDelete({ 
        _id: new ObjectID("5c26b7941bd14dc54fb4dc7e")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});