const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }],
    date: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('post', PostSchema)

module.exports = Post