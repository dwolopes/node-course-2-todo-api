var { mongoose, Schema } = require('../db/mongoose');

let todo =  new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    },
    completed : {
        type: Boolean,
        default: false
    },
    completedAt : {
        type: Number,
        default: null
    }

})

module.exports = {
    Todo: mongoose.model('Todo', todo)
}