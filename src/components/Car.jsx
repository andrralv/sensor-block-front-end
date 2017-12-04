import React from 'react'
import ReactSVG from 'react-svg'

const Car = () => (
    <ReactSVG
    path="./car.svg"
    callback={svg => console.log(svg)}
    className="car-svg"
    wrapperClassName="car-svg-wrapper"
    evalScript="always"
    style={{width: 650, paddingLeft: 70, paddingTop: 20}}
  />
)

export default Car
