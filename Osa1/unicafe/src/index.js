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
            <p>
                Good {props.good}
                Neutral {props.neutral}
                Bad {props.bad}
                Average {(props.bad*-1+props.good*1+props.neutral*0)/(props.bad+props.neutral+props.good)}
                Positive {props.good/(props.bad+props.neutral+props.good)*100} %
            </p>
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
            <Header name={header} />
        <button onClick={() => setGood(good + 1)}>
            good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
            neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
            bad
        </button>
        <Header name = {header2} />
        <Statistics good = {good} neutral = {neutral} bad = {bad}/>
        </div>
        )
}

ReactDOM.render(<App />, document.getElementById('root'))