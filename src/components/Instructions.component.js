import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
    this.shouldDisplayImage = props.shouldDisplayImage
    this.list = props.items.filter(item => item.length >= 3)
  }

  render() {
    const shouldDisplayImage = this.shouldDisplayImage
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {shouldDisplayImage === 'true' && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        <ul>
          {this.list.map((item, index) => (
            <li>{index % 2 == 0 ? item : item.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Instructions
