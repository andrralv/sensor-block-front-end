import React from 'react'
import Loader from './Loader'

const Actor = (props) => (
    <div>
        {!props.actor.name && <Loader />}
        <h1>{props.actor.name}</h1>
    </div>
)

module.exports = Actor;