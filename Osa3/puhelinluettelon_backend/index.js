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
    }
  ]

let info = {
    persons: persons.length,
    pvm: new Date()
}

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
  res.sendDate()
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/info', (req, res) => {
    res.send(
        `<p>Phonebook has info for ${info.persons} people</p>
        <p>${info.pvm}</p>`
        )
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})