import React, { Component } from 'react'
import jsonTemplate from '../utils/SensorTemplate.json'

export class SensorTableCom extends Component {

  render() {
    let cap = function capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    }
    var keys1 = jsonTemplate.sensors.crash

    Object.keys(keys1).forEach(key => {
      keys1[key] = this.props.sensors[key];
    });

    for (var key in keys1) {
      if (keys1.hasOwnProperty(key)) {
        if (keys1[key] === undefined) { keys1[key] = 0 }
      }
    }
    let enumABC = ["A", "B", "C", "D", "E", "F", "G"];

    const temp = Object.keys(keys1).map((key, index) =>

      <tr key={index}><td className="li-list">{enumABC[index]}.&nbsp;{cap(key)}</td><td>{keys1[key]}</td></tr>
    );
    return (
      <div className="table-li">
        <table>
          <thead>
            <tr><th>Crash Sensors</th></tr>
          </thead>
          <tbody>{temp}</tbody>
        </table>
      </div>
    )
  }
}

export default SensorTableCom