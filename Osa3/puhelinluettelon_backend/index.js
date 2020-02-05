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
  const person = persons.find(note => note.id === id)
  
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})