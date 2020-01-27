import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>
              {props.name}  
            </h1>
        </div>
    )
  }

const Button = ({onClick, text}) => {
    return (
        <button onClick = {onClick}> {text} </button>
    )
}

const StatisticLine = ({text, value, extra}) => {
    return (
        <p>
            {text} {value} {extra}
        </p>

    )
}

const Statistics = (props) => {
    if (props.good+props.neutral+props.bad === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }
    return (
        <div>
            <StatisticLine text = "good" value = {props.good}/>
            <StatisticLine text = "neutral" value = {props.neutral}/>
            <StatisticLine text = "bad" value = {props.bad}/>
            <StatisticLine text = "average" value = {props.good*1+props.bad*-1/(props.good+props.neutral+props.bad)}/>
            <StatisticLine text = "positive" value = {props.good/(props.good+props.neutral+props.bad)*100} extra = "%" /> 
            <StatisticLine text = "all" value = {props.good+props.neutral+props.bad}/>
        </div>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const header = "give feedback"
    const header2 = "statistics"

    return (
        <div>
        <table cellSpacing = "0" cellPadding = "0">
            <tbody>
                <tr>
                    <td><Header name={header} />
                    </td>
                </tr>
                <tr>
                    <td><Button onClick = {() => setGood(good + 1)} text = 'good'/></td>
                    <td><Button onClick = {() => setNeutral(neutral + 1)} text = 'neutral'/></td>
                    <td><Button onClick = {() => setBad(bad + 1)} text = 'bad' /></td> 
                </tr>
                <tr>
                    <td><Header name = {header2} /></td>
                </tr>
                <tr>
                    <td><Statistics good = {good} neutral = {neutral} bad = {bad} /></td>
                </tr>
            </tbody>
        </table>
        </div>
        )
}

ReactDOM.render(<App />, document.getElementById('root'))