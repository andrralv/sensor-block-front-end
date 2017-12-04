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
        this.setState({
            bn : ContractLibrary.getBlockNumber(),
            status : ContractLibrary.getVehiculeStatus("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7")
        });
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const eventTypes = ["Creation", "Transfer", "ReceivedAtDealer", "ReceivedAtServiceShop",
            "Maintenance", "AutoSensor", "ManualSensor", "Sell", "Buy"];
        const listItems = this.state.history.map((row, index) =>
            <section key={index} className="year">
                <h3>{row.timestamp.getFullYear()}</h3>
                <section>
                    <h4>{monthNames[row.timestamp.getMonth()]}</h4>
                    <ul className="table even">
                        <li>{row.blockNumber}</li>
                        <li>{eventTypes[row.event]}</li>
                        <li>{row.description}</li>
                    </ul>
                </section>
            </section>
        );
        return (
            <div className="App">
                <div className="margin-left">
                    <div className="wrapper-2">
                        <h1>History</h1>
                        <h2>{this.state.status.brand}</h2>
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
        );
    }
}

export default History