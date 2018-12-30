const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const {ObjectID} = require('mongodb');
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose,
    Schema: mongoose.Schema,
    ObjectID
};
