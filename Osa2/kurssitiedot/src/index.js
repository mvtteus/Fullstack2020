import React from 'react'
import ReactDOM from 'react-dom'

const Courses = ({sisalto}) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {sisalto.map((kurssi, i) => 
            <Course key={i} sisalto={kurssi} />
            )}
        </div>
    )
}

const Course = ({sisalto}) => {
    return (
        <div>
            <Header name = {sisalto.name}/>
            <Content sisalto = {sisalto.parts}/> 
            <Total sisalto = {sisalto.parts}/>
        </div>
    )
}
const Header = ({name}) => {
  return (
          <h2>
            {name}  
          </h2>
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
            <b>
                Total of {sisalto.reduce((s, p) => s + p.exercises,0)} exercises
            </b>
        </div>
    )
}

const App = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

  return (
    <div>
        <Courses sisalto = {courses}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))