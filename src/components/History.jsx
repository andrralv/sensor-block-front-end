import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'
import Loader from './Loader'
import Navigation from './Navigation'
import '../css/history.css'
import Mod from './Modal'

export class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            vehicules: [],
            loading: false,
            title: "History"
        };
    }

    componentWillMount() {
        ContractLibrary.getVehicules(this);
    }

    handleVehiculeChange = (e) => {
        this.setState({
            loading : true
        });
        ContractLibrary.getVehiculeHistory(e.target.value, this);
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
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
        const listItems = Object.keys(this.state.history).map((year, index) =>
            <section key={index} className="year">
                <h3>{year}</h3>
                {
                    Object.keys(this.state.history[year]).map((month, index) => (
                        <section key={index}>
                            <h4>{monthNames[month]}</h4>
                            <ul>
                                {
                                    this.state.history[year][month].map((row, index) => (
                                        <li key={index}>
                                            <div className="history-grid">
                                                <div className="ref">{row.rerefence}</div>
                                                <div className="block">{row.blockNumber}</div>
                                                <div className="type">{eventTypes[row.event]}</div>
                                                <div className="desc">{row.description}</div>
                                                <div className="day">{row.timestamp.toLocaleString('en-us', dateFormatOptions)}</div>
                                                <Mod address={row.rerefence} />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                    ))
                }
            </section>
        );
        const vehicules = this.state.vehicules.map((vehicule, index) => {
            return <option key={index} value={vehicule.address} label={vehicule.vin}>{vehicule.vin}</option>;
        });
        const drawHistory = Object.keys(this.state.history).length > 0;
        return (
            <div className="App">
                <Navigation title={this.state.title} />
                <div className="margin-left">
                    <div className="container">
                        <select id="vehicule" onChange={this.handleVehiculeChange}>
                            {vehicules}
                        </select>
                        <div className="glow"></div>
                        {this.state.loading ? (<Loader />)
                            : (drawHistory &&
                                <div className="item">
                                    <div id="timeline">
                                        <div>
                                            {listItems}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default History