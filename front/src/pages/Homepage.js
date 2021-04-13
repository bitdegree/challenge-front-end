import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

import './Homepage.scss'

const Homepage = ({ posts }) => {

    useEffect(() => {
        document.title = 'Homepage - blog'
    }, [])

    const formatDate = date => {
        let year = String(date.getFullYear())
        let month = String(date.getMonth())
        let day = String(date.getDate())
        month = month.length === 1 ? '0' + month : month
        day = day.length === 1 ? '0' + day : day
        return `${year}-${month}-${day}`
    }

    return (
        <main>
            {posts.map(e => (
                <div className='post' key={e._id}>
                    <h2>{e.title}</h2>
                    <p>{e.body}</p>
                    <div className='credits'>
                        <p>{e.user.name}</p>
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
