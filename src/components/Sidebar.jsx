import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => (
        <div className="react-sidebar react-blue react-bar-block bar-width"> 
            <h3 className="siderbar-text">Sensor-Block</h3>
            <div className="spacer"></div>
            <Link to="/" className="react-bar-item react-button">Vehicle Info</Link>
            <Link to="/history" className="react-bar-item react-button">History</Link>
            <Link to="/notifications" className="react-bar-item react-button">Notifications</Link>
            <Link to="/transfer" className="react-bar-item react-button">Transfer Vehicle</Link>
            <Link to="/receive" className="react-bar-item react-button">Receive Vehicule</Link>
            <Link to="/release" className="react-bar-item react-button">Release Vehicule</Link>
            <Link to="/create" className="react-bar-item react-button">Create Vehicule</Link>
            <Link to="/service" className="react-bar-item react-button">Service</Link>
            <Link to="/settings" className="react-bar-item react-button">Settings</Link>
            <div className="siderbar-text profile">
                <div >{props.actor.name}</div>
                <div >{props.actor.typeName}</div>
            </div>
        </div>
    )
export default Sidebar;