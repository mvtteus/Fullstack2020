import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

  const poista = (id) => {
    return axios.delete(`http://localhost:3001/api/persons/${id}`)
  }

  const paivita = (id, numberUpdate) => {
      return axios.put(`http://localhost:3001/api/persons/${id}`, numberUpdate)
  }
  
  
  export default { 
    getAll: getAll, 
    create: create,
    poista: poista,
    paivita: paivita
  }