var { mongoose, Schema } = require('../db/mongoose');

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let user = new Schema({
    email: {
        type: String,
        required: 'Email address is required',
        minlength: 1,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});

module.exports = {
    User: mongoose.model('User', user)
}