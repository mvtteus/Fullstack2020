import React from 'react'

const Persons = ({persons, newSearch}) => {
    return (
        <div>
          {persons.filter(i => i.name.includes(newSearch)).map((person, i) => 
          <p key={person.name}>
         {person.name} {person.number}
          </p>
          )}
        </div>
    )
}

export default Persons