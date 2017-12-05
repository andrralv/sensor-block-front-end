import React, { Component } from 'react'
import ContractLibrary from '../utils/ContractLibrary'
import Grid from './Grid'

export class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          status: [],
          actor: []
      };
  }

  componentWillMount() {
    ContractLibrary.getInstance();
    ContractLibrary.getVehiculeStatus("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this)
    ContractLibrary.getActorData("0x173c290Bbd9f14B8ae8C79cb770bABcd472Be1BD", this)
  }

render() {
  console.log(this.state.actor);
  return (
  <div className="App">
    <div className="margin-left">
      <div className="wrapper-2">
        <h1>Sensor-Block</h1>
        <Grid status={this.state.status}/>
      </div>
    </div>
  </div>
    )
  }
}

export default Home