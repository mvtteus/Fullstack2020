import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

  const poista = (id) => {
    return axios.delete(`/api/persons/${id}`)
  }

  const paivita = (id, numberUpdate) => {
      return axios.put(`/api/persons/${id}`, numberUpdate)
  }
  
  
  export default { 
    getAll: getAll, 
    create: create,
    poista: poista,
    paivita: paivita
  }