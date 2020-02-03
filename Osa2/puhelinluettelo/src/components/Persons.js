import React from 'react'
import personService from '../services/personComm'

const Persons = ({persons, newSearch, setPersons}) => {
    return (
        <div>
          {persons.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).map((person, i) => 
          <p key={person.name}>
         {person.name} {person.number}
         <button onClick={() => 
                  {if(window.confirm(`Delete ${person.name}?`)) {
                    personService.poista(person.id).then(response => {
                      personService.getAll().then(response => {
                        setPersons(response.data)})})}
                    {console.log("deleted", {person})}}}> delete </button> 
          </p>
          )}
        </div>
    )
}

export default Persons