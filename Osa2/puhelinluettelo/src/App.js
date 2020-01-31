import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: '', number: ''}
  ]) 

  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', EventTarget)
    const personObject = {
      name: newName, number: newNumber
    }
    if (persons.some(i => i.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else if (persons.some(i => i.number === newNumber)){
      window.alert(`number ${newNumber} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber = {setNewNumber} addPerson = {addPerson} handleNumberChange = {handleNumberChange} handleNameChange = {handleNameChange}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} />
    </div>
  )

}

export default App