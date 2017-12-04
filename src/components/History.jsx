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
            bn : ContractLibrary.getBlockNumber()
        });
    }

    render() {
        return (
            <div className="App">
                <div className="margin-left">
                    <div className="wrapper-2">
                        <h1>History</h1>
                        <h2>{this.state.bn}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default History