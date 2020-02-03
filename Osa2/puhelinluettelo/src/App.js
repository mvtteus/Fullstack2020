import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/personComm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: '', number: ''}
  ]) 

  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll('http://localhost:3001/persons')
      .then(response => {
        console.log('loaded')
        setPersons(response.data)
      })
  }, [])

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
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
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
      <Persons persons = {persons} newSearch = {newSearch} setPersons = {setPersons} />
    </div>
  )

}

export default App