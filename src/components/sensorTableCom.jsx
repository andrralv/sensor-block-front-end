import React, { Component } from 'react'
import jsonTemplate from '../utils/SensorTemplate.json'
import ContractLibrary from '../utils/ContractLibrary'

export class SensorTableCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sensors: {}
    };
  }

  componentWillMount() {
    ContractLibrary.getSensorData("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this);
  }

  render() {
    let keysProps = this.state.sensors
    let listTemplate = []
    let listJson = []

    // Object.keys(keysProps).forEach(function(key, val) {
    //   listJson.push(key)
    // });
    
    // console.log("-----------");
    var keys1 = jsonTemplate.sensors.auto
    var keys2 = jsonTemplate.sensors.crash

    var keys3 = jsonTemplate.sensors.crash

    // Object.keys(keys1).forEach(function(key, val) {
    //   listTemplate.push(key)
    // });
    console.log(this.state.sensors);
    Object.keys(keys1).forEach(key => {
      keys1[key]=this.state.sensors[key];
    });;
    console.log(keys1);   
    
      return ( 
        <li></li>
      )
  }
}

export default SensorTableCom