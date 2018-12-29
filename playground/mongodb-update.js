const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to Mongo DB Server');
    }
    console.log('Connected to MongoDB server'); 

/*     db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c267cd070b62a45a9c41335')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }) */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c26b78a1bd14dc54fb4dc72')
    }, {
        $set: {
            name: 'Douglas Lopes'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    //db.close();
});