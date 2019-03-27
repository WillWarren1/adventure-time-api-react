import axios from 'axios'
import React, { Component } from 'react'
import CharacterSpecific from '../components/CharacterSpecific'

class Character extends Component {
  state = {
    character: {}
  }
  componentDidMount() {
    axios
      .get(
        `https://localhost:5001/api/Character/${this.props.match.params.name}`
      )
      .then(resp => {
        this.setState({
          character: resp.data
        })
      })
  }
  render() {
    return (
      <CharacterSpecific
        title={this.state.character.name}
        allegiance={this.state.character.allegiance}
        age={this.state.character.age}
        species={this.state.character.species}
        placeOfOrigin={this.state.character.placeOfOrigin}
      />
    )
  }
}

export default Character
