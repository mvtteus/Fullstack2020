import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdote = state.find(a => a.id === id)
      const voted = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      const anecdotes = state.map(a => a.id !== id ? a : voted)
      const sorted = anecdotes.sort((i, j) => i.votes > j.votes ? -1 : (i.votes < j.votes ? 1 : 0
      ))
      return sorted
    case 'ADD NEW':
      //ei tarvi sortata, koska default votemäärä on 0 ja menee itsestään pohjalle
      return [...state, action.data]
    case 'INIT':
        return action.data
    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD NEW',
      data: newAnecdote,
    })
  }
}


export const addVote = (id) => {
  return {
    type: "VOTE",
    data: { id }
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes,
    })
  }
}

export default reducer