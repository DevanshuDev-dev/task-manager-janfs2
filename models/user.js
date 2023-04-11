const mongoose = require('mongoose');
const validator = require('validator');

const user = mongoose.model('User', {
    name: {
        type: String
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    password: {
        type: String,
        minLength: 7,
        validate(value) {
            if (value.toLowerCase().includes('pass')) {
                throw new Error('Password should not contain pass');
            }
        }
    },
    age: {
        type: Number,
        default: 0
    }
})

module.exports = user;