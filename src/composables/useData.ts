

const axios = require('axios').default;

// // get post data and save to ss.response
const getData = ( action = function(response){console.log('no action')}) =>{
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{ 

      // // allow custom function with the returned data
      action(response)

    })
    .catch(err => {console.log(err)})
}

// get users data and save to ss.authors
const getAuthors = (action = function(response){console.log('no action')}) =>{
  axios 
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{ 

      // // allow custom function with the returned data
      action(response)

    })
    .catch(err => {console.log(err)})
}


const getComments = (urlEnding, action = function(response){console.log('no action')}) =>{
  axios
    .get('https://jsonplaceholder.typicode.com/comments?postId=' + urlEnding)
    .then(response =>{

      action(response)

    })
    .catch(err=>console.log(err))
}

const sendComment = (body) =>{
  axios
    .post('https://jsonplaceholder.typicode.com/comments', {body})
    .then(response =>{
      alert(`Comment sent: \n"${response.data.body}"`)
    })
    .catch(err=>{console.log(err)})
}


const createPost = (author, title, body) =>{
  axios
    .post('https://jsonplaceholder.typicode.com/posts', {
      author: author,
      title: title,
      body: body
    })
    .then(response =>{
      
      alert(`author: \n ${response.data.author} \n title: \n ${response.data.title} \n body: \n ${response.data.body}`)

    })
    .catch(err => {console.log(err)})
}



// // all functions exported inside useData() function
const useData = () =>{
  return {getData, getAuthors, getComments, sendComment, createPost }
}

export default useData