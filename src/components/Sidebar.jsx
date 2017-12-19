import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => (
    <div className="react-sidebar react-blue react-bar-block bar-width">
        <h3 className="siderbar-text">Sensor-Block</h3>
        <div className="spacer"></div>
        <Link to="/" className="react-bar-item react-button">Vehicle Info</Link>
        <Link to="/history" className="react-bar-item react-button">History</Link>
        {(props.actor.type !== 0 & props.actor.type !== 2) &&
            <Link to="/notifications" className="react-bar-item react-button">Notifications</Link>
        }
        {props.actor.type !== 2 &&
            <Link to="/transfer" className="react-bar-item react-button">Transfer Vehicle</Link>
        }
        {props.actor.type === 2 &&
            <div>
                <Link to="/release" className="react-bar-item react-button">Release Vehicle</Link>
                <Link to="/receive" className="react-bar-item react-button">Receive Vehicle</Link>
                <Link to="/service" className="react-bar-item react-button">Service</Link>
            </div>
        }
        {props.actor.type === 0 &&
            <Link to="/create" className="react-bar-item react-button">Create Vehicle</Link>
        }
        <Link to="/settings" className="react-bar-item react-button">Settings</Link>
        <div className="siderbar-text profile">
            <div >{props.actor.name}</div>
            <div >{props.actor.typeName}</div>
        </div>
    </div>
)
export default Sidebar;