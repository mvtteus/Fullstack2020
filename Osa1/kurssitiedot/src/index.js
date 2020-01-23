import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
      <div>
          <h1>
            {props.course}  
          </h1>
      </div>
  )
}
const Part = (props) => {
  return (
      <div>
          <p>
            {props.nimi} {props.tehtavia}
          </p>
      </div>
  )
} 
const Content = (props) => {
  const [eka, toka, kolmas] = props.taulukko
  return (
    <div>
      <Part nimi = {eka.name} tehtavia = {eka.exercises}/>
      <Part nimi = {toka.name} tehtavia = {toka.exercises}/>
      <Part nimi = {kolmas.name} tehtavia = {kolmas.exercises}/>
    </div>
  )
} 
const Total = (props) => {
  const [eka, toka, kolmas] = props.taulukko
  return (
    <div>
        <p>
          Number of exercises {eka.exercises + toka.exercises + kolmas.exercises}
        </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content taulukko = {parts} />
      <Total taulukko = {parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))