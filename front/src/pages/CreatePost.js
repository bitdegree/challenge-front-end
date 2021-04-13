import { useEffect } from 'react'

const CreatePost = () => {

    useEffect(() => {
        document.title = 'Create post - blog'
    }, [])

    return (
        <div>
            <p>create post</p>
        </div>
    )
}

export default CreatePost
