import React, { Component } from 'react';
import Contracts from '../utils/ContractLibrary'
import TruffleContract from 'truffle-contract'
import getWeb3 from '../utils/getWeb3'

export class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            web3: null
        }
    }

    componentWillMount() {
        getWeb3.then(results => {
            this.setState({
                web3: results.web3
            });
            this.initContracts();
        }).catch((error) => {
            console.log(error)
        });
    }

    initContracts() {
        this.setState({
            Vehicule: Contracts(this.web3)
        });
    }

    render() {
        return (
            <div className="App">
                <div className="margin-left">
                    <div className="wrapper-2">
                        <h1>History</h1>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default History