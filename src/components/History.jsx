import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'

export class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bn: 0
        };
    }

    componentWillMount() {
        ContractLibrary.getInstance();
        this.setState({
            bn : ContractLibrary.getBlockNumber(),
            status : ContractLibrary.getVehiculeStatus("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7")
        });
    }

    render() {
        return (
            <div className="App">
                <div className="margin-left">
                    <div className="wrapper-2">
                        <h1>History</h1>
                        <h2>{this.state.status.brand}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default History