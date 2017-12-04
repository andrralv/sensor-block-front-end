import React, { Component } from 'react';
import Contracts from './utils/ContractLibrary'
import TruffleContract from 'truffle-contract'
import getWeb3 from './utils/getWeb3'

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
            Vehicule : Contracts(this.web3)
        });
    }

    render() {
        return (
            <div>{this.state.Vehicule.getVehiculeHistory(1)}</div>
        );
    }
}

export default History