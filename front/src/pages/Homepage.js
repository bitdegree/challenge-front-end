import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

import formatDate from '../utilities/formatDate'

import './Homepage.scss'

const Homepage = ({ posts }) => {

    useEffect(() => {
        document.title = 'Homepage - blog'
    }, [])

    return (
        <main>
            {posts.map(e => (
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
