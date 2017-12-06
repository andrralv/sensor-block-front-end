import React, { Component } from 'react'
import ContractLibrary from '../utils/ContractLibrary'
import Grid from './Grid'
import Navigation from './Navigation'

export class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          status: [],
          actor: [], 
          sensors: [], 
          title: "Home"
      };
  }

  componentWillMount() {
    ContractLibrary.getInstance();
    ContractLibrary.getVehiculeStatus("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this);
    ContractLibrary.getActorData(this);
    // ContractLibrary.getSensorData("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this);
  }

render() {

  console.log(this.state.sensors);
  console.log(this.state.actor);
  return (
  <div className="App">
    <Navigation title={this.state.title}/>
    <div className="margin-left">
      <div className="wrapper-2">
        <Grid status={this.state.status} actor={this.state.actor}/>
      </div>
    </div>
  </div>
    )
  }
}

export default Home