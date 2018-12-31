var express = require('express');
var bodyParser = require('body-parser');

const { mongoose, ObjectID } = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo')

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
       res.send({todos: todos});
   }, (e) => {
        res.status(400).send(e);
   }) 
})

app.get('/todos/:id', (req, res) => {
    const {id} = req.params;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Id Inválido');
    };

    Todo.findById(id).then((todo) => {
        if(!todo){
            res.status(404).send('Nenhum Id Encontrado');
        } else {
            res.send({todo});
        }
    }, (e) => {
        res.status(400).send('Bad request');
    })
})

app.delete('/todos/:id', (req, res) => {
    const {id} = req.params;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Id Inválido');
    };

    Todo.findByIdAndRemove(id).then((doc) => {
        if(!doc){
            return res.status(404).send('Nenhum Id Encontrado');
        } 
        res.send({doc});
    }).catch((e) => {
        res.status(400).send('Bad request');
    })
})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = {
    app
}