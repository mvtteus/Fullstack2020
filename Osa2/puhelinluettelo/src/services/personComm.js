import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

  const poista = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
  }
  
  
  export default { 
    getAll: getAll, 
    create: create,
    poista: poista
  }