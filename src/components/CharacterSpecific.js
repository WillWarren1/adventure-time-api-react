import React, { Component } from 'react'

class CharacterSpecific extends Component {
  render() {
    return (
      <>
        <ul>
          <h1>
            {this.props.title} of {this.props.allegiance}
          </h1>
          <span>
            <li>{this.props.age}</li>
            <li>{this.props.placeOfOrigin}</li>
            <li>{this.props.species}</li>
          </span>
        </ul>
      </>
    )
  }
}

export default CharacterSpecific
