import React, { Component } from 'react'
import './../styles/instructions.css'

class Counter extends Component {
  state = { counter: 0 }

  constructor(props) {
    super(props)
  }

  handleIncrementClick = () => {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  handleDecrementClick = () => {
    const { counter } = this.state
    this.setState({ counter: counter - 1 })
  }

  render() {
    const { counter } = this.state
    return (
      <div className="instructions">
        <p>Counter value is {counter}</p>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
      </div>
    )
  }
}

export default Counter
