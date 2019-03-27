import axios from 'axios'
import React, { Component } from 'react'

class Character extends Component {
  componentDidMount() {
    axios
      .get('https://localhost:5001/api/Character')
      .then(resp => console.log({ resp }))
  }
  render() {
    return <div />
  }
}

export default Character
