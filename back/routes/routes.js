const router = require('express').Router()

const userController = require('../User/userController')
const userAuth = require('../User/auth')
const postController = require('../Post/postController')
const commentController = require('../Comment/commentController')

// users
router.post('/user/signup', userController.signUp)
router.post('/user/login', userController.logIn)
router.post('/user/logout', userAuth, userController.logOut)
router.post('/user', userAuth)

// posts
router.get('/posts', postController.getPosts)
router.get('/post/:id', postController.getPost)
router.post('/post/create', userAuth, postController.createPost)
router.put('/post/edit', userAuth, postController.editPost)

// coment
router.post('/post/comment', userAuth, commentController.createComment)

module.exports = router