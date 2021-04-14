const Comment = require('./Comment')
const Post = require('../Post/Post')

createComment = async (req, res) => {
    const postId = req.body.postId
    const user = req.user

    try {
        const post = await Post.findOne({_id: postId})
        if (!post) throw 'no such post?'

        const comment = new Comment(req.body)
        comment.user = user._id
        post.comments = [...post.comments, comment._id]

        const savedComment = await comment.save()
        if (!savedComment) throw 'something went wrong'

        const savedPost = await post.save()
        if (!savedPost) throw 'something went wrong'
        
        res.send('comment success')
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = {
    createComment
}
