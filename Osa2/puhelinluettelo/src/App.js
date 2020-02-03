import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/personComm'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([
    { name: '', number: ''}
  ]) 

  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')
  const [showMessage, setShowMessage] = useState(null)

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
    if (persons.some(i => i.name === newName && i.number !== newNumber)) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the number with a new one?`)) {
        personService
        .paivita(persons.filter(i => i.name === newName)[0].id, personObject)
        .then(response => {
        personService.getAll().then(response => {
          //en käyttänyt seuraavassa concatia, koska se "duplikoi" sivulla näkyvät numerot ´, kunnes sivu päivitettiin ja tilanne palautui normaaliksi
          setPersons(response.data)
          setShowMessage(`Updated ${newName} 's number`)
          setTimeout(() => {
            setShowMessage(null)
          }, 1000)
        })
        }).catch(error => {
          setShowMessage(`${newName} is already removed from the server!`)
          setTimeout(() => {
            setShowMessage(null)
          }, 1000)
          setPersons(persons.filter(i => i.name !== newName))
        })
      }
    } else if (persons.some(i => i.name === newName)){
      //vähän turha, mutta jätin kuitenkin, ettei tarvitse tehdä tarpeetonta päivitystä jos yritetään luoda identtinen yhteystieto olemassa olevan kanssa
      window.alert(`${newName} is already added to phonebook`)
    } else {
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        setShowMessage(`Added ${newName}`)
        setTimeout(() => {
          setShowMessage(null)
        }, 1000)
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
      <Message message = {showMessage}/>
      <Filter newSearch = {newSearch} handleFiltering = {handleFiltering}/>
      <h2>Add a new contact</h2>
      <PersonForm newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber = {setNewNumber} addPerson = {addPerson} handleNumberChange = {handleNumberChange} handleNameChange = {handleNameChange}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} newSearch = {newSearch} setPersons = {setPersons} setShowMessage= {setShowMessage}/>
    </div>
  )

}

export default App