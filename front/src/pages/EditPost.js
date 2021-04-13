import { useEffect } from 'react'

const EditPost = () => {

    useEffect(() => {
        document.title = 'Edit post - blog'
    }, [])

    return (
        <div>
            <p>edit post</p>
        </div>
    )
}

export default EditPost
