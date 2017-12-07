import React from 'react'
import Loader from './Loader'

const Actor = (props) => (
    <div>
        {!props.actor.name ? (<Loader />)
            : (<table>
                <thead>
                    <tr>
                        <th>Owner Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.actor.name}</td>
                    </tr>
                    <tr>
                        <td className="text-smaller">{props.actor.owner}</td>
                    </tr>
                </tbody>
            </table>
            )
        }
    </div>
)

module.exports = Actor;