import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ newSearch, setSearch ] = useState('')
  const [ countries, setCountries ] = useState([''])
  const [ load, setLoad] = useState(false)


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('loaded')
        setCountries(response.data)
        setLoad(true)
        console.log(response.data)
      })
  }, [])

  const handleSearch= (event) => {
    setSearch(event.target.value)
  }

  if (load) {
    return (
    <div>
      <h2>settii</h2>
      <form> 
            <div>
            find countries: <input value = {newSearch} onChange = {handleSearch}/>
            </div>
            </form> 
            <div>
            {countries.filter(i => i.name.toLowerCase().includes(newSearch.toLowerCase())).map((country, i) => 
            <p key={i}>
          {country.name}
            </p>
            )}
          </div>
    </div>
  )
} else {
  return (
    <div>Loading...</div>
  )
}
  }
  

export default App