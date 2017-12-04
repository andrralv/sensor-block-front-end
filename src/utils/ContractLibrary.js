import TruffleContract from 'truffle-contract'
import getWeb3 from '../utils/getWeb3'
import VehiculeABI from '../../build/contracts/Vehicule'

const ContractLibrary = {
    web3: null,
    contracts: [],
    getInstance: function () {
        if (!this.web3) {
            getWeb3.then(results => {
                this.web3 = results.web3;
                this.initContracts();
            }).catch((error) => {
                console.log(error)
            });
        }
    },
    initContracts: function () {
        this.contracts.Vehicule = TruffleContract(VehiculeABI);
        this.contracts.Vehicule.setProvider(this.web3.currentProvider);
    },
    getBlockNumber: function () {
        return this.web3.eth.blockNumber;
    }
}

export default ContractLibrary