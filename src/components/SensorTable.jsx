import React, { Component } from 'react'
import jsonTemplate from '../utils/SensorTemplate.json'

const wb = function(props) {
  var keys1 = jsonTemplate.sensors.auto
  var keys2 = jsonTemplate.sensors.crash

  var sensorKeys = props.sensors
  console.log("sensorkeys:", sensorKeys)
  Object.keys(sensorKeys).forEach(function(key, val) {
    console.log("1", key);
  });

  Object.keys(keys2).forEach(function(key, val) {
    console.log("2", key);
  });
}

const SensorTableTop = (props) => (
  <ul className="sensorList">
    <li>Co2Exhaust: &nbsp; {props.sensors.co2exhaust}</li>
    <li>Co2Exhaust: &nbsp; {props.sensors.co2exhaust}</li>
    <li>Co2Exhaust: &nbsp; {props.sensors.co2exhaust}</li>
    <li>Co2Exhaust: &nbsp; {props.sensors.co2exhaust}</li>
    <li>Co2Exhaust: &nbsp; {props.sensors.co2exhaust}</li>
    <li>Co2Exhaust: &nbsp; {props.sensors.co2exhaust}</li>

  </ul>
)
  
  const SensorTableBottom = () => (
  <div></div>
 )

 module.exports = {
    SensorTableTop,
    SensorTableBottom
 }