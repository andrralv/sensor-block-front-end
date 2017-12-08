import React from 'react'
import Car from './Car'
import SensorTable from './SensorTable'
import SensorTableCom from './SensorTableCom'
import SensorTableCrash from './SensorTableCrash'

import Status from './Status'
import Actor from './Actor'

function x(props){
    console.log(props.sensors)
}

const Grid = (props) => (
    
    <div className="grid-wrapper">
        <div className="grid-box a">
            <Car />
        </div>
        <div className="grid-box b">
            <SensorTableCom/>
        </div>
        <div className="grid-box c">
            <Status status={props.status} />
        </div>
        <div className="grid-box d">
            <Actor actor={props.actor} />
        </div>
        <div className="grid-box e">
            <SensorTableCrash/>
        </div>
    </div>
)
export default Grid;
