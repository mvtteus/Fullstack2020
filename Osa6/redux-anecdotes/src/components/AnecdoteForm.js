import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { sendNotification} from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        props.sendNotification(`added ${content}`, 5)
      }

      return (
          <div>
            <h2>create new</h2>
            <form onSubmit = {addAnecdote}>
                <div><input name = 'anecdote' /></div>
                <button type = 'submit'>create</button>
            </form>
          </div>
      )
}

export default connect(
  null, 
  {  sendNotification, createAnecdote }
)(AnecdoteForm)

