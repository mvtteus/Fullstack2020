import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  const handleFiltering = (event) => {
    event.preventDefault()
    const f = event.target.value
    dispatch(filterChange(f))
    }

  return (
    <div>
      filter   
      <input 
        name="filter" 
        onChange= {handleFiltering}
      />
    </div>
  )
}

export default VisibilityFilter