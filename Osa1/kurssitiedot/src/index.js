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
const Part = ({nimi, tehtavia}) => {
  return (
      <div>
          <p>
            {nimi} {tehtavia}
          </p>
      </div>
  )
} 
const Content = ({osa1, osa2, osa3}) => {
  return (
    <div>
      <Part nimi = {osa1.name} tehtavia = {osa1.exercises}/>
      <Part nimi = {osa2.name} tehtavia = {osa2.exercises}/>
      <Part nimi = {osa3.name} tehtavia = {osa3.exercises}/>
    </div>
  )
} 
const Total = (props) => {
  return (
    <div>
        <p>
          Number of exercises {props.exercises.reduce(function (a, b) { return a + b; }, 0)}
        </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content osa1 = {part1} osa2 = {part2} osa3 = {part3} />
      <Total exercises = {[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))