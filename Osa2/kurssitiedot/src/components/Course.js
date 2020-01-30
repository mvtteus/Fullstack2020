import React from 'react'

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

export default Course