import React from 'react'
import ReactSVG from 'react-svg'
import sensorColors from './../utils/sensorColors.js'

const Car = () => (
    <ReactSVG
    path="./car-v2.svg"
    callback={function(svg) {
        sensorColors(svg);
        }
    }   
    className="car-svg"
    wrapperClassName="car-svg-wrapper"
    evalScript="always"
    style={{width: 650, paddingLeft: 60, paddingTop: 20}}
  />
)

export default Car
