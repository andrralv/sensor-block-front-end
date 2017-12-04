import React, { Component } from 'react'
//import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import getWeb3 from './utils/getWeb3'
import Sidebar from './Sidebar'
import Grid from './Grid'
import Main from './components/Main'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        })

        // check if web3 is indeed connected.
        if (this.state.web3.isConnected()) {
          console.log("We're in, boss.");

        } else {
          console.log("Web3 is not connected.");
        }

        this.instantiateContract()
      })
      .catch((error) => {
        console.log(error)
      })
  }


  instantiateContract() {
    /*
       const TruffleContract = require('truffle-contract')
   
       
       const simpleStorage = contract(SimpleStorageContract)
       simpleStorage.setProvider(this.state.web3.currentProvider)
   
       // Declaring this for later so we can chain functions on SimpleStorage.
       var simpleStorageInstance
   
       this.state.web3.personal.unlockAccount("0x0022467b05bb2f6289a55f37d60ba395495a6670", "1234");
   
       this.state.web3.eth.getAccounts((error, accounts) => {
         simpleStorage.deployed().then((instance) => {
           simpleStorageInstance = instance
   
           // Stores a given value, 5 by default.
           return simpleStorageInstance.set(9, { from: accounts[0] })
         }).then((result) => {
           // Get the value from the contract to prove it worked.
           return simpleStorageInstance.get.call(accounts[0])
         }).then((result) => {
           // Update state with the result.
           return this.setState({ storageValue: result.c[0] })
         })
       })*/


  }

  pStyle = {
    marginLeft: '25%'
  };

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App
