import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'
import '../css/history.css'

export class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bn: 0,
            history: []
        };
    }

    componentWillMount() {
        ContractLibrary.getInstance();
        ContractLibrary.getVehiculeHistory("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7", this);
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const eventTypes = ["Creation", "Transfer", "ReceivedAtDealer", "ReceivedAtServiceShop",
            "Maintenance", "AutoSensor", "ManualSensor", "Sell", "Buy"];
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
                                        <li>{row.rerefence} {row.blockNumber} {eventTypes[row.event]} {row.description}</li>
                                    ))
                                }
                            </ul>
                        </section>
                    ))
                }
            </section>
        );
        return (
            <div className="App">
                <div className="margin-left">
                    <div className="container">
                        <div className="wrapper-2">
                            <h1>History</h1>
                            <h2></h2>
                        </div>
                        <div className="item">
                            <div id="timeline">
                                <div>
                                    {listItems}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default History