

const axios = require('axios').default;

const getData = (ss) =>{
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{ 
      ss.response = response;
      // console.log('getdata resp', ss.response)
    })
    .catch(err => {console.log(err)})
}
 
const getAuthors = (ss) =>{
  axios 
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{ ss.authors = response })
    .catch(err => {console.log(err)})
}

const getAuthorsnt = (ss) =>{
  axios 
    .get('https://jsonplaceholder.typicode.com/users')
}


// comments
const useData = () =>{
  return {getData, getAuthors, getAuthorsnt }
}

export default useData