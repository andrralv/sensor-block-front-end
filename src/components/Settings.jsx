import React from 'react'
import Loader from './Loader'

const Settings = () => (
    <div className="go-left-2">
       
        <div className="AccountInfo settingsWrapper">
            <div className="drawing">
                <svg height="150" width="150">
                    <circle cx="80" cy="80" r="60" stroke="white" strokeWidth="3" fill="grey" />
                </svg> 
            </div>
            <ul>
                <li>Account Name: <span className="make-blue">TIA Motors</span></li>
                <li>Account Email: <span className="make-blue">info@tiamotors.com</span></li>
                <li><span className="make-blue">Change Password</span></li>
            </ul>
            </div>
    </div>
)

module.exports = Settings;