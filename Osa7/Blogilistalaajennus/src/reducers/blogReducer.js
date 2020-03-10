import blogService from '../services/blogs'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'LIKE':
      const id = action.data.id
      const blog = state.find(b => b.id === id)
      const liked = {
        ...blog,
        likes: blog.likes + 1
      }
      const blogs = state.map(b => b.id !== id ? b : liked)
      const sorted = blogs.sort((i, j) => i.votes > j.votes ? -1 : (i.votes < j.votes ? 1 : 0
      ))
      return sorted
    case 'ADD NEW':
      //ei tarvi sortata, koska default likemäärä on 0 ja menee itsestään pohjalle
      return [...state, action.data]
    case 'REMOVE':
      return state.filter(b => b.id !== action.data.id)
    case 'INIT':
        return action.data.sort((i, j) => i.votes > j.votes ? -1 : (i.votes < j.votes ? 1 : 0))
    default:
      return state
  }
}

export const createBlog = (content) => {
  return async dispatch => {
    const newBlog = await blogService.create(content)
    dispatch({
      type: 'ADD NEW',
      data: newBlog,
    })
  }
}

export const addLike = (object) => {
  return async dispatch => {
    const blog = await blogService.update(object)
    dispatch({
      type: 'LIKE',
      data: { id: blog.id }
    })
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT',
      data: blogs,
    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    const blogs = await blogService.remove(id)
    dispatch({
      type: 'REMOVE',
      data: { blogs, id  }
    })
  }
}

export default reducer