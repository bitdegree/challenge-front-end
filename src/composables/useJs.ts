

const sort = (_ss , _myauthor ) =>{

  // // if you select a specific author then...
  if(_myauthor != "All Posts" ){

    // // find correct author id
    _ss.filterAuthor = _ss.authors.data.filter((author)=>{
      return author.username == _myauthor
    })

    // // filter by correct author
    _ss.list = _ss.posts.data.filter((item)=>{
      return item.userId == _ss.filterAuthor[0].id
    })
  }
  else{
    _ss.list = _ss.posts.data
  }

}

// // from any ss.list item userId find author from ss.authors with the same id
const findAuthor = ( itemId, _ss ) =>{

  // // find author data of this card
  const thisAuthor = _ss.authors.data.filter(author => {
    return author.id == itemId.userId;
  })

  return thisAuthor[0].username.toString()
}



// // all functions exported inside useData() function
const useData = () =>{
  return { sort, findAuthor }
}

export default useData