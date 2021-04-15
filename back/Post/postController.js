const { findOne } = require('./Post')
const Post = require('./Post')

getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'name').populate('comments')
        if (!posts) throw 'something went wrong'
        res.json(posts)
    } catch (e) {
        res.status(400).json(e)
    }
}

getPost = async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id}).populate('user', 'name').populate('comments').populate({
            path: 'comments',
            populate: {
                path: 'user',
                model: 'user',
                select: 'name'
            }
        })
        if (!post) throw 'post not found'
        res.json(post)
    } catch (e) {
        res.status(400).json(e)
    }
}

createPost = async (req, res) => {
    const newPost = new Post(req.body)
    newPost.user = req.user._id
    try {
        const savedPost = await newPost.save()
        if (!savedPost) throw 'something went wrong'
        res.json(savedPost._id)
    }catch (e) {
        res.status(400).json(e)
    }
}

editPost = async (req, res) => {
    const user = req.user
    const filter = {
        _id: req.body._id,
        user: user._id
    }
    const update = req.body
    try {
        const updatedPost = await Post.findOneAndUpdate(filter, update, {new: true})
        if (!updatedPost) throw 'something went wrong'
        res.json(updatedPost._id)
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    editPost
}
