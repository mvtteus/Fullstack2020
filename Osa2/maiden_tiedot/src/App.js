import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RenderCountries from './components/RenderCountries'

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
        <form> 
              <div>
              find countries: <input value = {newSearch} onChange = {handleSearch}/>
              </div>
        </form> 
        <RenderCountries countries = {countries} newSearch = {newSearch}/>
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

export default App