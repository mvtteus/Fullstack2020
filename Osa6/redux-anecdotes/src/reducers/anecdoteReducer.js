const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


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
  return {
      type: 'ADD NEW',
      data: asObject(content)
    }
}


export const addVote = (id) => {
  return {
    type: "VOTE",
    data: { id }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    data: anecdotes,
  }
}

export default reducer