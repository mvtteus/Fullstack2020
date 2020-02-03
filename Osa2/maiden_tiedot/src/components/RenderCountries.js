import React from 'react'

const RenderCountries = ({countries, newSearch}) => {
    if (countries.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).length <= 10) {
        return (
        <div>
          {countries.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).map((country, i) => 
          <p key={i}>
         {country.name}
          </p>
          )}
        </div>
        )
    } else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } 
}

export default RenderCountries