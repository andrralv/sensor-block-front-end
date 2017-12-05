import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => (
        <div className="react-sidebar react-light-grey react-bar-block bar-width"> 
            <h3 className="siderbar-text">Sensor-Block</h3>
            <div className="spacer"></div>
            <Link to="/" className="react-bar-item react-button">Vehicle Info</Link>
            <Link to="/history" className="react-bar-item react-button">History</Link>
            <Link to="/notifications" className="react-bar-item react-button">Notifications</Link>
            <Link to="/transfer" className="react-bar-item react-button">Transfer Vehicle</Link>
            <Link to="/settings" className="react-bar-item react-button">Settings</Link>
            <div className="profile">
                <div className="greyed-out">Toyoko</div>
                <div className="greyed-out">Manufacturer</div>
            </div>
        </div>
    )
export default Sidebar;