import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { sendNotification, reset } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes) 
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(addVote(id))
        dispatch(sendNotification(`voted ${id}`))
        setTimeout(() => {
            dispatch(reset())  
          }, 5000)
    }

    return (
        <div>
            {anecdotes.filter(a => a.content.toLowerCase().includes(filter)).map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick = {() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default AnecdoteList

