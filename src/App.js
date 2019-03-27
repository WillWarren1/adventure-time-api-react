import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Character from './pages/Character'
import Place from './pages/Place'
import Splash from './pages/Splash'
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/character/:name" component={Character} />
            <Route exact path="/location/:place" component={Place} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
