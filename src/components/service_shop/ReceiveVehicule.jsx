import React, { Component } from 'react'
import Navigation from '../Navigation'
import '../../css/form.css'

export class ReceiveVehicule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Receive Vehicule"
        };
    }

    render() {
        return (
            <div className="App">
                <Navigation title={this.state.title} />
                <div className="margin-left">
                    <div className="container">
                        <div id="blue-form">
                            <div className="form-container">
                                <input className="input-field" required autoFocus />
                                <label className="input-label">Vin</label>
                                <div className="input-subline"></div>
                            </div>
                            <i className="material-icons w3-xxlarge next">arrow_forward</i>
                            <div className="form-container">
                                <textarea className="input-field" cols="40" rows="5"/>
                                <label className="input-label">Comments</label>
                                <div className="input-subline"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = ReceiveVehicule;