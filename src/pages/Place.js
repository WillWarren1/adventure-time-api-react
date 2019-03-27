import axios from 'axios'
import React, { Component } from 'react'
import PlaceSpecific from '../components/PlaceSpecific'
class Place extends Component {
  state = {
    title: '',
    greatestAlly: '',
    currentRuler: '',
    typeOfGovernment: ''
  }
  componentDidMount() {
    axios
      .get(`https://localhost:5001/api/Place/${this.props.match.params.place}`)
      .then(resp => {
        this.setState({
          title: resp.data.name,
          greatestAlly: resp.data.greatestAlly,
          currentRuler: resp.data.currentRuler,
          typeOfGovernment: resp.data.typeOfGovernment
        })
      })
  }
  render() {
    return (
      <>
        <PlaceSpecific
          title={this.state.title}
          greatestAlly={this.state.greatestAlly}
          currentRuler={this.state.currentRuler}
          typeOfGovernment={this.state.typeOfGovernment}
        />
      </>
    )
  }
}

export default Place
