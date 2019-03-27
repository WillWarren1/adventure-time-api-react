import React, { Component } from 'react'

class CharacterSpecific extends Component {
  render() {
    return (
      <>
        <ul>
          <h1>{this.props.title}</h1>
          <h2> Tied to {this.props.allegiance} </h2>

          <span>
            <li>Age: {this.props.age}</li>
            <li>Originating from {this.props.placeOfOrigin}</li>
            <li>Species: {this.props.species}</li>
          </span>
        </ul>
      </>
    )
  }
}

export default CharacterSpecific
