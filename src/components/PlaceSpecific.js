import React, { Component } from 'react'

class PlaceSpecific extends Component {
  render() {
    return (
      <>
        <ul>
          <h1>{this.props.title}</h1>
          <span>
            <li>Current Ruler: {this.props.currentRuler}</li>
            <li>Type Of Government: {this.props.typeOfGovernment}</li>
            <li>Ally: {this.props.greatestAlly}</li>
          </span>
        </ul>
      </>
    )
  }
}

export default PlaceSpecific
