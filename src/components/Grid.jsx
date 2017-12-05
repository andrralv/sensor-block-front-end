import React from 'react'
import Car from './Car'
import SensorTable from './SensorTable'
import Status from './Status'

const Grid= (props) => (

    <div className="grid-wrapper">
            <div className="grid-box a">
                <Car />
            </div>
            <div className="grid-box b">
                <SensorTable.SensorTableTop />
            </div>
            <div className="grid-box c">
                <Status status={props.status}/>
            </div>
            <div className="grid-box d">D</div>
            <div className="grid-box e">
                <SensorTable.SensorTableBottom />
            </div>
        </div>
    )
export default Grid;
