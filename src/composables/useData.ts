
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const axios = require('axios').default;

// // get post data and save to ss.response
const getPosts = ( action = function(response){console.log('no action')}) =>{
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

const getPhotos = (action = function(response){console.log('no action')}) =>{
  axios
    .get('https://jsonplaceholder.typicode.com/photos' )
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



const updatePost = (title, body, urlEnding) =>{
  axios.put('https://jsonplaceholder.typicode.com/posts/' + urlEnding, {
    title: title,
    body: body
  }).then(response =>{
    alert(`title: \n ${response.data.title._rawValue} \n body: \n ${response.data.body._rawValue}`)
  }).catch(err => {
    console.log(err)
  })
}






// // all functions exported inside useData() function
const useData = () =>{
  return {getPosts, getAuthors, getComments, sendComment, createPost, getPhotos, updatePost }
}

export default useData