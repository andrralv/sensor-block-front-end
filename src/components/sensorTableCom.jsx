import React, { Component } from 'react'
import jsonTemplate from '../utils/SensorTemplate.json'
import ContractLibrary from '../utils/ContractLibrary'
import Loader from './Loader'

export class SensorTableCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true
    };
  }

componentWillReceiveProps() {
    if (this.props.sensors) {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    let cap = function capitalize(s)
    {
        return s[0].toUpperCase() + s.slice(1);
    }
    let l = []
    var keys1 = jsonTemplate.sensors.auto

    Object.keys(keys1).forEach(key => {
      keys1[key]=this.props.sensors[key];
    });

    for (var key in keys1) {
      if(keys1.hasOwnProperty(key)){
        if (keys1[key] == undefined) {keys1[key] = 0}
      }
    }

    const temp = Object.keys(keys1).map((key, index) => 
      <tr><td className="li-list" key={index}>{cap(key)}</td><td>{keys1[key]}</td></tr>
    );
    return (
      this.state.loading ? (<Loader />)
        : (
        <div className="table-li-larger">
          <table>
            <thead>
              <th>Performance Sensors</th>
              {temp}
            </thead>
          </table>
      </div>
      )
    )
  }
}

export default SensorTableCom