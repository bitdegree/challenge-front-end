import { useContext, useState } from 'react'
import { userContext } from '../App'
import { Link, useHistory } from 'react-router-dom'

import favicon from '../assets/favicon.ico'
import { SignOut } from "phosphor-react";

import './Header.scss'

import Button from './Button'

const Header = () => {

    const [user, setUser] = useContext(userContext)
    const [menuOpen, setMenuOpen] = useState(false)

    const history = useHistory()

    const handleLogOut = () => {
        setUser(null)
        setMenuOpen(false)
        localStorage.clear()
    }

    const handleCreate = () => {
        setMenuOpen(false)
        history.push('/createpost')
    }

    return (
        <header>
            <div className='logo-container'>
                <img src={favicon} alt="logo" />
                <h1 className='logo'><Link className='Link' to='/'>blog.</Link></h1>
            </div>
            {!user ? <Link className='Link' to='/login'>
                    <Button text={'Sign in'}/></Link> 
                : 
                <div className='userBox' onClick={() => setMenuOpen(prev => !prev)}>
                    <p className='create'><Link className='Link' to='/createpost'>Create post</Link></p>
                    <h2>{user.name}</h2>
                    <span className='signout-logo' onClick={handleLogOut}><SignOut size={36} /></span>
                <span className='arrow' style={{transform: menuOpen && 'rotate(225deg)', marginBottom: menuOpen && '-4px'}}></span>
            </div>}
            <nav style={{transform: menuOpen && 'scaleY(1)'}}>
                <ul>
                    <li className='mobile-Link' onClick={handleCreate}>Create post</li>
                    <li className='mobile-Link' onClick={handleLogOut}>Log out</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
