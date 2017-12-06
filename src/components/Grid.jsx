import React from 'react'
import Car from './Car'
import SensorTable from './SensorTable'
import Status from './Status'
import Actor from './Actor'

const Grid = (props) => (

    <div className="grid-wrapper">
        <div className="grid-box a">
            <Car />
        </div>
        <div className="grid-box b">
            <SensorTable.SensorTableTop />
        </div>
        <div className="grid-box c">
            <Status status={props.status} />
        </div>
        <div className="grid-box d">
            <Actor actor={props.actor} />
        </div>
        <div className="grid-box e">
            <SensorTable.SensorTableBottom />
        </div>
    </div>
)
export default Grid;
