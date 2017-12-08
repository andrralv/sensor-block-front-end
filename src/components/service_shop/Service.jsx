import React, { Component } from 'react'
import ContractLibrary from '../../utils/ContractLibrary'
import Loader from '../Loader'
import Navigation from '../Navigation'
import Status from '../Status'
import '../../css/transfer.css'
import '../../css/icon.css'
import '../../css/form.css'

export class DoService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicules: [],
            history: {},
            status: {},
            loading: true,
            title: "Service"
        };
    }

    componentWillMount() {
        ContractLibrary.getVehicules(this);
        ContractLibrary.getLatestMaintenance("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this);
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
        const eventTypes = ["Creation", "Transfer", "ReceivedAtDealer", "ReceivedAtServiceShop",
            "Maintenance", "Automatic Sensor Data Upload", "ManualSensor", "Sell", "Buy"];
        const dateFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return (
            <div className="App">
                <Navigation title={this.state.title} />
                <div className="margin-left">
                    <div className="container">
                        {this.state.loading ? (<Loader />)
                            : (
                                <div className="transfer-grid">
                                    <div className="vehicules-box">
                                        <ol className="rectangle-list">{listItems}</ol>
                                    </div>
                                    <div className="status-box">
                                        {!this.state.status.brand ? (<h3>Please Select a Vehicule</h3>)
                                            : (
                                                (this.state.history.rerefence ?
                                                    (<div>
                                                        <h4>Latest Maintenance</h4>
                                                        <div className="history-grid">
                                                            <div className="ref">{this.state.historyrerefence}</div>
                                                            <div className="block">{this.state.history.blockNumber}</div>
                                                            <div className="type">{eventTypes[this.state.history.event]}</div>
                                                            <div className="desc">{this.state.history.description}</div>
                                                            <div className="day">{this.state.history.timestamp.toLocaleString('en-us', dateFormatOptions)}</div>
                                                        </div>
                                                    </div>)
                                                    : (<h3>No Maintenance Recorded</h3>)
                                                )
                                            )
                                        }
                                    </div>
                                    <div className="transfer-box">
                                        {this.state.status.brand &&
                                            <div id="blue-form">
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

module.exports = DoService;