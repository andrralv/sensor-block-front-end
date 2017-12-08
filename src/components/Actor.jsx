import React from 'react'
import Loader from './Loader'

const Actor = (props) => (
    <div>
        {(!props.actor.name ? (<Loader />)
            : <table>
                <thead>
                    <tr>
                        <th className="aligner">Owner Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Current Owner:</td>
                    </tr>
                    <tr>
                       <td className="make-blue">{props.actor.name}</td>
                    </tr>
                    <tr>
                        <td>Owner Type:</td>
                    </tr>
                    <tr>
                        <td className="text-smaller make-blue">{props.actor.typeName}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                    </tr>
                    <tr>
                        <td className="text-smaller make-blue">{props.actor.owner}</td>
                    </tr>
                </tbody>
            </table>
            )
        }
    </div>
)

module.exports = Actor;