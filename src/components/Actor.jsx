import React from 'react'
import Loader from './Loader'

const Actor = (props) => (
    <div>
        {!props.actor.name && <Loader />}
        <h5>{props.actor.name}</h5>
        <p>{props.actor.owner}</p>
    </div>
)

module.exports = Actor;