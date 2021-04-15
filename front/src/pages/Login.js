import { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import validator from 'validator'

import Button from '../components/Button'

import './Login.scss'
import favicon from '../assets/favicon.ico'

import { userContext } from '../App'

const emptyForm = {
    loginEmail: '',
    loginPassword: '',
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPasswordConfirm: ''
}

const Login = () => {

    const [user, setUser] = useContext(userContext)

    const [register, setRegister] = useState(false)
    const [formData, setFormData] = useState(emptyForm)
    const [error, setError] = useState('')
    
    const history = useHistory()

    useEffect(() => {
        document.title = 'Sign in - blog'
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        login(formData.loginEmail, formData.loginPassword)
    }

    const login = (email, password) => {
        axios.post('http://localhost:5000/user/login', {
            email: email,
            password: password
        }).then(r => {
            localStorage.setItem('token', r.headers.token)
            setUser(prev => {
                return {...prev, name: r.data.name, _id: r.data._id}
            })
            setError('')
            setFormData(emptyForm)
            history.push('/')
        })
        .catch(() => setError('Wrong email or password'))
    }

    const handleRegister = e => {
        e.preventDefault()
        if (formData.registerName.length > 2 
            && formData.registerPassword.length > 7
            && formData.registerPassword === formData.registerPasswordConfirm 
            && validator.isEmail(formData.registerEmail)) {
            axios.post('http://localhost:5000/user/signup', {
                name: formData.registerName,
                password: formData.registerPassword,
                email: formData.registerEmail
            })
            .then(() => login(formData.registerEmail, formData.registerPassword))
            .catch(() => setError('Email already exists in our database'))
        } else {
            let message = ''
            if (formData.registerName.length < 3) message += 'name must be at least 3 chars long, '
            if (formData.registerPassword !== formData.registerPasswordConfirm || formData.registerPassword.length < 8) message += 'passwords must match and at least 8 chars long, '
            if (!validator.isEmail(formData.registerEmail)) message += 'invalid e-mail adress, '
            message = message.charAt(0).toUpperCase() + message.slice(1)
            message = message.slice(0, -2)
            setError(message)
        }
    }

    const handleToggle = () => {
        setRegister(prev => !prev)
        setFormData(emptyForm)
        setError('')
    }

    const handleChangeInputs = e => {
        setFormData(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    return (
        <div className='login-container'>
            <div className='login-form-container'>
                <img src={favicon} alt="logo" />
                {!register ? <form onSubmit={handleLogin}>
                    <input type="email" name='loginEmail' value={formData.loginEmail} placeholder='E-mail' onChange={handleChangeInputs} />
                    <input type="password" name='loginPassword' value={formData.loginPassword} placeholder='Password' onChange={handleChangeInputs} />
                    <Button text={'Sign in'} action={handleLogin}/>
                    <p className='error'>{error}</p>
                </form> 
                :
                <form onSubmit={handleRegister}>
                    <input type="text" name='registerName' value={formData.registerName} placeholder='Name' onChange={handleChangeInputs} />
                    <input type="email" name='registerEmail' value={formData.registerEmail} placeholder='E-mail' onChange={handleChangeInputs} />
                    <input type="password" name='registerPassword' value={formData.registerPassword} placeholder='Password' onChange={handleChangeInputs} />
                    <input type="password" name='registerPasswordConfirm' value={formData.registerPasswordConfirm} placeholder='Confirm password' onChange={handleChangeInputs} />
                    <Button text={'Register'} action={handleRegister}/>
                    <p className='error'>{error}</p>
                </form>
                }
                {!register ? 
                    <p>Dont have account? <span onClick={handleToggle}>Register</span></p>
                    :
                    <p>Already have account? <span onClick={handleToggle}>Login</span></p>
                }
            </div>
        </div>
    )
}

export default Login
