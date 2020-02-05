const express = require('express')
const app = express()

let persons = [
    { 
      name: "Arto Hellas", 
      number: "040-123456",
      id: 1
    },
    { 
      name: "Ada Lovelace", 
      number: "39-44-5323523",
      id: 2
    },
    { 
      name: "Dan Abramov", 
      number: "12-43-234345",
      id: 3
    },
    { 
      name: "Mary Poppendieck", 
      number: "39-23-6423122",
      id: 4
    },
    {
      name: "Iivari Laaksonen",
      number: "112",
      id: 5
    }
  ]

let info = {
    persons: persons.length,
    date: new Date()
}

app.get('/', (req, res) => {
  res.send('<h1>HUUTISTA</h1>')
  res.sendDate()
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log(id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.get('/api/info', (req, res) => {
    res.send(
        `<p>Phonebook has info for ${info.persons} people</p>
        <p>${info.date}</p>`
    )
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.use(express.json())
app.post('/api/persons', (request, response) => {
  console.log(request.body)
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 1000) + 1  
  }
  persons.concat(person)
  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})