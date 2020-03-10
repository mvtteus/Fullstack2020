import React, { useState } from 'react'
import { sendNotification } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogReducer'
import { connect } from 'react-redux'

const NewBlog = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')


  const handleNewBlog = (event) => {
    event.preventDefault()
    props.createBlog({
      title,
      author,
      url
    })
    props.sendNotification(`a new blog '${title}' by ${author} added!`, 5)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleNewBlog} >
        <div>
          author
          <input
            id='author'
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          title
          <input
            id='title'
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          url
          <input
            id='url'
            value={url}
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button id="create">create</button>
      </form>
    </div>
  )
}

export default connect(
  null, 
  {  sendNotification, createBlog }
)(NewBlog)