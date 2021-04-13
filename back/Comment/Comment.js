const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: new Date()
    }
})

const Comment = mongoose.model('comment', CommentSchema)

module.exports = Comment