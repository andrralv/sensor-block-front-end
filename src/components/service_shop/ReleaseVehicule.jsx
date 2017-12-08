import React, { Component } from 'react'
import ContractLibrary from '../../utils/ContractLibrary'
import Loader from '../Loader'
import Navigation from '../Navigation'
import Status from '../Status'
import '../../css/transfer.css'
import '../../css/icon.css'
import '../../css/form.css'

export class ReleaseVehicule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicules: [],
            status: {},
            title: "Release Vehicule"
        };
    }

    componentWillMount() {
        ContractLibrary.getVehicules(this);
    }

    handleClick = (address) => {
        return function (e) {
            e.preventDefault();
            ContractLibrary.getVehiculeStatus(address, this);
        }.bind(this);
    };

    render() {
        const listItems = this.state.vehicules.map((row, index) => (
            <li key={index}>
                <a href="#" onClick={this.handleClick(row.address)}>{row.vin}</a>
            </li>
        ));
        return (
            <div className="App">
                <Navigation title={this.state.title} />
                <div className="margin-left">
                    <div className="container">
                        {this.state.vehicules.length === 0 ? (<Loader />)
                            : (
                                <div className="transfer-grid">
                                    <div className="vehicules-box">
                                        <ol className="rectangle-list">{listItems}</ol>
                                    </div>
                                    <div className="status-box">
                                        {!this.state.status.brand ? (<p>Please Select a Vehicule</p>)
                                            : (<Status status={this.state.status} />)
                                        }
                                    </div>
                                    <div className="transfer-box">
                                        {this.state.status.brand &&
                                            <div id="blue-form">
                                                <div className="form-container">
                                                    <input className="input-field" required autoFocus />
                                                    <label className="input-label">Amount</label>
                                                    <div className="input-subline"></div>
                                                </div>
                                                <div className="form-container">
                                                    <input className="input-field" required />
                                                    <label className="input-label">Elapsed Time</label>
                                                    <div className="input-subline"></div>
                                                </div>
                                                <i className="material-icons w3-xxlarge next">arrow_forward</i>
                                                <div className="form-container">
                                                    <textarea className="input-field" cols="40" rows="5" />
                                                    <label className="input-label">Comments</label>
                                                    <div className="input-subline"></div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = ReleaseVehicule;