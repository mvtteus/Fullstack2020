const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
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

export default reducer