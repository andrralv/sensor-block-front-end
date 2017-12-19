import React, { Component } from 'react'
import jsonTemplate from '../utils/SensorTemplate.json'

export class SensorTableCom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cap = function capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }
    var keys1 = jsonTemplate.sensors.auto

    Object.keys(keys1).forEach(key => {
      keys1[key]=this.props.sensors[key];
    });

    for (var key in keys1) {
      if(keys1.hasOwnProperty(key)){
        if (keys1[key] === undefined) {keys1[key] = 0}
      }
    }

    const temp = Object.keys(keys1).map((key, index) => 
      <tr key={index}><td className="li-list">{index+1}.&nbsp;{cap(key)}</td><td>{keys1[key]}</td></tr>
    );
    return (
        <div className="table-li-larger">
          <table>
            <thead>
              <tr><th>Performance Sensors</th></tr>
            </thead>
            <tbody>{temp}</tbody>
          </table>
      </div>
    )
  }
}

export default SensorTableCom