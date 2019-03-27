import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Splash extends Component {
  state = {
    characters: [],
    places: []
  }
  componentDidMount() {
    axios
      .get('https://localhost:5001/api/Character')
      .then(resp => {
        this.setState({ characters: resp.data })
      })
      .then(console.log(this.state.characters))
    axios.get('https://localhost:5001/api/Place').then(resp => {
      this.setState({ places: resp.data })
    })
  }
  render() {
    return (
      <>
        <main>
          <nav>
            {this.state.places.map((place, i) => {
              console.log(place)
              return (
                <ul key={i}>
                  <Link to={`/location/${this.state.places[i].id}`}>
                    {this.state.places[i].name}
                  </Link>{' '}
                  {this.state.places[i].characters.map((character, j) => {
                    console.log(character)
                    return (
                      <li key={j}>
                        {this.state.places[i].characters[j].name}{' '}
                      </li>
                    )
                  })}
                </ul>
              )
            })}
          </nav>
        </main>
      </>
    )
  }
}

export default Splash
