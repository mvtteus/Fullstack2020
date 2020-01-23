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
        <p> Good {good} </p>
        <p> Neutral {neutral} </p>
        <p> Bad {bad} </p>
        </div>
        )
}

ReactDOM.render(<App />, document.getElementById('root'))