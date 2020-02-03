import React from 'react'

const Button = ({setSearch}) => {
    return (
        <button onClick = {setSearch}> show </button>
    )
}

const RenderSingleCountry = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p> 
            <h2>languages</h2>
            <ul>
                {country.languages.map((lang, i) => 
                    <li key = {lang.iso639_1}>
                        {lang.name}
                    </li>)}
            </ul>
            <img src = {country.flag} alt = "huutista" width="100" height="100"/>
        </div>
    )
}
const RenderCountries = ({countries, newSearch, setSearch}) => {
    if (countries.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).length === 1) {
        return (
            <RenderSingleCountry country = {countries.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase()))[0]}/>
        )
    } else if (countries.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).length <= 10 && countries.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).length >= 2) {
        return (
            <div>
              {countries.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).map((country, i) => 
              <p key={i}>
             {country.name} 
             <Button setSearch = {setSearch(country.name)}/>
             {console.log(newSearch)}
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