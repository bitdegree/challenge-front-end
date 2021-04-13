import { useEffect } from 'react'

const Post = () => {

    useEffect(() => {
        document.title = 'Post - blog'
    }, [])

    return (
        <div>
            <p>post</p>
        </div>
    )
}

export default Post
