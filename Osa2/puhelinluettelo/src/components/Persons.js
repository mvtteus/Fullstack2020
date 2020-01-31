import React from 'react'

const Persons = ({persons}) => {
    return (
        <div>
            {persons.map((person, i) => 
          <p key={person.name}>
         {person.name} {person.number}
          </p>
          )}
        </div>
    )
}

export default Persons