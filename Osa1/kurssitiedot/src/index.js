import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
      <div>
          <p>
            {props.course}  
          </p>
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
const Content = ({s1, m1, s2, m2, s3, m3}) => {
  return (
    <div>
      <Part nimi = {s1} tehtavia = {m1}/>
      <Part nimi = {s2} tehtavia = {m2}/>
      <Part nimi = {s3} tehtavia = {m3}/>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content s1 = {part1} m1 = {exercises1} s2 = {part2} m2 = {exercises2} s3 = {part3} m3 = {exercises3} />
      <Total exercises = {[exercises2, exercises1, exercises3]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))