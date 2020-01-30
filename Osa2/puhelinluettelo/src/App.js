import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: '' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', EventTarget)
    const personObject = {
      name: newName
    }
    if (persons.some(i => i.name === newName)) {
      window.alert('huu')
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, i) => 
          <p key={person.name}>
         {person.name}
          </p>
          )}
    </div>
  )

}

export default App