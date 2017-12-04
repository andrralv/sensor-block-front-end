import React from 'react'
import Sidebar from './Sidebar'
import Grid from './Grid'

const Home = () => (
    <div className="App">
        <Sidebar />
        <div className="margin-left">
          <div className="wrapper-2">
            <h1>Sensor-Block</h1>
            <p>Welcome <span className="greyed-out">Toyoko</span>! - Logged in as: <span className="greyed-out">Manufacturer</span></p>
          </div>
          <Grid />
        </div>
      </div>
)

export default Home