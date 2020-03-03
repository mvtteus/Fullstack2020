import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue("")
  }

  return {
    type,
    reset,
    value,
    onChange
  }
}

export const useReset = (type) => {
  const [value,setValue] = useState('')

  const onChange = () => {
    setValue("")
  }

  return {
    type,
    value,
    onChange
  }
}
