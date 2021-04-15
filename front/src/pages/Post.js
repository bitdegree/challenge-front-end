import { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import './Post.scss'

import axios from 'axios'

import formatDate from '../utilities/formatDate'

import Button from '../components/Button'

import { userContext } from '../App'

const Post = () => {

    const { id } = useParams()
    const [post, setPost] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    const [user, setUser] = useContext(userContext)

    useEffect(() => {
        document.title = 'Post - blog'
        axios.get(`http://localhost:5000/post/${id}`)
        .then(r => {
            setPost(r.data)
            setLoaded(true)
        })
    }, [])

    const handleComment = e => {
        e.preventDefault()

        const token = localStorage.getItem('token') || null

        if (!comment) return setError('Empty comment?')
        if (!token) return setError('Please log in to submit a comment')

        const data = {
            body: comment,
            postId: id
        }
        const headers = {
            headers : {
                'Content-Type': 'application/json',
                'token': token
            }
        }

        axios.post('http://localhost:5000/post/comment', data, headers)
        .then(r => {
            const comments = post.comments
            comments.push(r.data)
            setPost(prev => {
                return {...prev, comments: comments}
            })
            setError('')
            setComment('')
        })
    }

    return (
        <div className='single-post'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Author: <b>{loaded && post.user.name}</b></p>
            <p>Date created: <b>{formatDate(new Date(post.date))}</b></p>
            {user && loaded && (post.user._id === user._id) && <Link to={`/createpost/${post._id}`}><Button text={'Edit post'}/></Link> }
            <div className='post-comment-container'>
                <form onSubmit={handleComment}>
                    <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder='Write comment'/>
                    <Button text={'Post comment'}/>
                    <p className='comment-error'>{error}</p>
                </form>
            </div>
            <div className='comments-container'>
                {loaded && post.comments.map(e => {
                        return <div className='comment' key={e._id}>
                            <p>{e.body}</p>
                            <p className='comment-author'>{e.user.name}, {formatDate(new Date(e.date))}</p>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Post