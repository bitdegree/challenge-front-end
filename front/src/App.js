import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'

import axios from 'axios'

import Header from './components/Header'

import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import NoMatch from './pages/NoMatch'

export const userContext = React.createContext(null)

const App = () => {

  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(r => setPosts(r.data.reverse()))
    const token = localStorage.getItem('token') || null
    if (token) {
      axios.post('http://localhost:5000/user', null, {
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      }).then(r => setUser({name: r.data.name, _id: r.data._id}))
    }
  }, [])

  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Homepage posts={posts}/>
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route path='/post/:id'>
              <Post />
            </Route>
            <Route exact path='/createpost'>
              <CreatePost />
            </Route>
            <Route exact path='/createpost/:id'>
              <CreatePost />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  )
}

export default App
