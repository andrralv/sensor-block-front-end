import React, { Component } from 'react'
import Loader from './Loader'
import Navigation from './Navigation'


export class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Settings"
        }
    };

    render() {
        return (
            <div>
            <Navigation title={this.state.title} />
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
         </div>)
    }
}

module.exports = Settings;
