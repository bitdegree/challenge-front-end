const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [3, 'name must be at least 3 chars long']
    },
    password: {
        type: String,
        required: true,
        min: [8, 'password must be at least 8 chars long']
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'invalid email'],
        unique: true
    },
    tokens: [{
        token: String
    }]
})

UserSchema.pre('save', function(next) {
    let user = this
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash
                next()
            })
        })
    } else next()
})

const User = mongoose.model('user', UserSchema)

module.exports = User