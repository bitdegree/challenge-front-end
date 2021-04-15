import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

import axios from 'axios'

import formatDate from '../utilities/formatDate'

import './Homepage.scss'

const Homepage = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        document.title = 'Homepage - blog'
        axios.get('http://localhost:5000/posts')
        .then(r => setPosts(r.data.reverse()))
    }, [])

    return (
        <main>
            {posts && posts.map(e => (
                <div className='post' key={e._id}>
                    <h2>{e.title}</h2>
                    <p>{e.body}</p>
                    <div className='credits'>
                        <p>{e.user.name}</p>
                        <p>{e.comments.length} {e.comments.length === 1 ? 'comment' : 'comments'}</p>
                        <p>{formatDate(new Date(e.date))}</p>
                    </div>
                    <Link to={`/post/${e._id}`} className='post-link'>
                        <Button text={'Read more'}/>
                    </Link>
                </div>
            ))}
        </main>
    )
}

export default Homepage
