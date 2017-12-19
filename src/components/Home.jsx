import React, { Component } from 'react'
import Grid from './Grid'
import Navigation from './Navigation'

export class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title: "Home"
      };
  }

render() {
  //console.log("en home", this.state.sensors)
  return (
  <div className="App">
    <Navigation title={this.state.title}/>
    <div className="margin-left">
      <div className="wrapper-2">
        <Grid />
      </div>
    </div>
  </div>
    )
  }
}

export default Home