import React, { Component } from 'react'
import Loader from './Loader'
import Navigation from './Navigation'


export class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Notifications"
        }
    };

    render() {
        return (
            <div>
            <Navigation title={this.state.title} />
            <div className="go-left-2">
                <div>
                    <p>The Machine Learning REST API needs to be connected to the Blockchain.</p>
                </div>
            </div>
        </div>)
    }
}

module.exports = Notifications;