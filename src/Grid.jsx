import React from 'react'
import SensorTable from './SensorTable'

const Grid= () => (
    <div className="grid-wrapper">
            <div className="grid-box a">
            <svg src="./public/car.svg"></svg>
            </div>
            <div className="grid-box b">
            <SensorTable.SensorTableTop />
            </div>
            <div className="grid-box c">C</div>
            <div className="grid-box d">D</div>
            <div className="grid-box e">
            <SensorTable.SensorTableBottom />
            </div>
        </div>
    )
export default Grid;
