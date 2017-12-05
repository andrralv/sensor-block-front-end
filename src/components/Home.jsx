import React, { Component } from 'react'
import ContractLibrary from '../utils/ContractLibrary'
import Grid from './Grid'

export class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          status: []
      };
  }

  componentWillMount() {
    ContractLibrary.getInstance();
    ContractLibrary.getVehiculeStatus("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this)
  }

render() {
  console.log(this.state.status.engine)
  return (
  <div className="App">
    <div className="margin-left">
      <div className="wrapper-2">
        <h1>Sensor-Block</h1>
        <p>Welcome <span className="greyed-out">Toyoko</span>! - Logged in as: <span className="greyed-out">Manufacturer</span></p>
        <Grid status={this.state.status}/>
      </div>
    </div>
  </div>
    )
  }
}

export default Home