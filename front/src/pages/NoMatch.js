import { useEffect } from 'react'

const NoMatch = () => {

    useEffect(() => {
        document.title = '404 - blog'
    }, [])

    return (
        <div>
            <p>404</p>
        </div>
    )
}

export default NoMatch
