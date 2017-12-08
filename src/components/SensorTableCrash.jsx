import React, { Component } from 'react'
import jsonTemplate from '../utils/SensorTemplate.json'
import ContractLibrary from '../utils/ContractLibrary'
import Loader from './Loader'

export class SensorTableCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sensors: {},
        loading: true
    };
  }

  componentWillMount() {
    ContractLibrary.getSensorData("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this);
  }

  render() {
    let cap = function capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }
    let l = []
    var keys1 = jsonTemplate.sensors.crash

    Object.keys(keys1).forEach(key => {
      keys1[key]=this.state.sensors[key];
    });

    for (var key in keys1) {
      if(keys1.hasOwnProperty(key)){
        if (keys1[key] == undefined) {keys1[key] = 0}
        }
    }

    const temp = Object.keys(keys1).map((key, index) => 
      <tr><td className="li-list" key={index}>{cap(key)}</td><td>{keys1[key]}</td></tr>
    );
    console.log(keys1)
    return (
      this.state.loading ? (<Loader />)
        : (
        <div className="table-li">
          <table>
            <thead>
              <th>Crash Sensors</th>
              {temp}
            </thead>
          </table>
      </div>
      )
    )
  }
}

export default SensorTableCom