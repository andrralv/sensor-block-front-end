import React from 'react'
import Car from './Car'
import SensorTableCom from './SensorTableCom'
import SensorTableCrash from './SensorTableCrash'

import Status from './Status'
import Actor from './Actor'

const Grid = (props) => (
    
    <div className="grid-wrapper">
        <div className="grid-box a">
        {/** Condicion para renderizar cuando el props este listo*/}
        {(props.sensors.co2exhaust) && <Car sensors={props.sensors}/>}
        </div>
        <div className="grid-box b">
            <SensorTableCom sensors={props.sensors}/>
        </div>
        <div className="grid-box c">
            <Status status={props.status} />
        </div>
        <div className="grid-box d">
            <Actor actor={props.actor} />
        </div>
        <div className="grid-box e">
            <SensorTableCrash sensors={props.sensors}/>
        </div>
    </div>
)
export default Grid;
