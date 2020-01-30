import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
    return (
        <div>
            <Header name = {props.name}/>
            <Content sisalto = {props.parts}/> 
            <Total sisalto = {props.parts}/>
        </div>
    )
}
const Header = ({name}) => {
  return (
          <h1>
            {name}  
          </h1>
  )
}
const Part = ({ osa }) => {
    return (
      <li>{osa.name} {osa.exercises}</li>
    )
  }
const Content = ({ sisalto }) => {
return (
    <div>
    <ul>
        {sisalto.map((osa, i) => 
        <Part key={i} osa={osa} />
        )}
    </ul>
    </div>
)
}

const Total = ({sisalto}) => {
    return (
        <div>
            Total of {sisalto.reduce((s, p) => s + p.exercises,0)} exercises
        </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
        <Course name = {course.name} parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))