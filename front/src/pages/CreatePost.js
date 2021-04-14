import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Button from '../components/Button'

import './CreatePost.scss'

import axios from 'axios'

const emptyForm = {
    title: '',
    body: ''
}

const CreatePost = () => {

    const { id } = useParams()

    const [formData, setFormData] = useState(emptyForm)
    const [error, setError] = useState('')

    const history = useHistory()

    useEffect(() => {
        document.title = 'Create post - blog'
        if (id) {
            axios.get(`http://localhost:5000/post/${id}`).then(r => {
                setFormData({
                    title: r.data.title,
                    body: r.data.body
                })
            })
        }
    }, [])

    const handleChange = e => {
        setFormData(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const createPost = e => {
        e.preventDefault()

        const token = localStorage.getItem('token') || null
        if (!token) return setError('Please login to save post')
        if (!formData.title) return setError('Title is required')
        if (!formData.body) return setError('Body is required')

        const data = {
            title: formData.title,
            body: formData.body
        }

        if (id) data._id = id

        const headers = {
            headers: {
                'Content-Type': 'application/json',
                token: token
            }
        }

        if (!id) {
            axios.post('http://localhost:5000/post/create', data, headers).then(r => {
            history.push(`/post/${r.data}`)
        })} else {
            axios.put('http://localhost:5000/post/edit', data, headers).then(r => {
            history.push(`/post/${r.data}`)
        })}
    }

    return (
        <div className='create-post-container'>
            <h2>Create post</h2>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title' value={formData.title} onChange={handleChange} />
                <label htmlFor="body">Body</label>
                <textarea id='body' name='body' value={formData.body} onChange={handleChange} />
                <Button text={id ? 'Save' : 'Create'} action={createPost} />
                <p className='create-error'>{error}</p>
            </form>
        </div>
    )
}

export default CreatePost
