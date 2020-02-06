import React from 'react'
import personService from '../services/personComm'


const Persons = ({persons, newSearch, setPersons, setShowMessage}) => {
    return (
        <div>
          {persons.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).map((person, i) => 
          <p key={person.name}>
         {person.name} {person.number}
         <button onClick={() => 
                  {if(window.confirm(`Delete ${person.name}?`)) {
                    personService.poista(person.id).then(response => {
                      personService.getAll().then(response => {
                        setPersons(response.data)
                      setShowMessage(`Deleted ${person.name}`)})})}
                      setTimeout(() => {
                        setShowMessage(null)
                      }, 1000)
                    {console.log("deleted", {person})}}}> delete </button> 
          </p>
          )}
        </div>
    )
}

export default Persons