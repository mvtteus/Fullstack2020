import React from 'react'

const Message = ({ message }) => {
    if (message === null) {
        return null
      }
    return (
      <p className='error'>
        {message}
      </p>
    )
  }

export default Message