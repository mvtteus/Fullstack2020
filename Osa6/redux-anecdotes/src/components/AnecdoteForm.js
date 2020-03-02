import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { sendNotification, reset } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnec = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnec))
        dispatch(sendNotification(`added ${content}`))
        setTimeout(() => {
          dispatch(reset())  
        }, 5000)
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

export default AnecdoteForm

