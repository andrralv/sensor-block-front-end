import React from 'react'
import Grid from './Grid'

const Home = () => (
  <div className="App">
    <div className="margin-left">
      <div className="wrapper-2">
        <h1>Sensor-Block</h1>
        <p>Welcome <span className="greyed-out">Toyoko</span>! - Logged in as: <span className="greyed-out">Manufacturer</span></p>
        <Grid />
      </div>
    </div>
  </div>
)

export default Home