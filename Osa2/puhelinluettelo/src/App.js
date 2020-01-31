import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: '', number: ''}
  ]) 

  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')

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
  const handleFiltering = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch = {newSearch} handleFiltering = {handleFiltering}/>
      <h2>Add a new contact</h2>
      <PersonForm newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber = {setNewNumber} addPerson = {addPerson} handleNumberChange = {handleNumberChange} handleNameChange = {handleNameChange}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} />
      <div>
        -----------------------------------------
            {persons.filter(i => i.name.includes(newSearch)).map((person, i) => 
          <p key={person.name}>
         {person.name} {person.number}
          </p>
          )}
        </div>
    </div>
  )

}

export default App