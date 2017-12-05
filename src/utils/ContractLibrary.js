import TruffleContract from 'truffle-contract'
import getWeb3 from '../utils/getWeb3'
import VehiculeABI from '../../build/contracts/Vehicule'

const ContractLibrary = {
    web3: null,
    contracts: [],
    getInstance: async function () {
        if (!this.web3) {
            await getWeb3.then(results => {
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
        if (!this.web3) {
            return;
        }
        return this.web3.eth.blockNumber;
    },
    getVehiculeStatus: async function (address) {
        let history = [];
        await this.contracts.Vehicule.at(address).then(vehicule => {
            return vehicule.getState();
        }).then(state => {
            history = {
                brand: state[0],
                model: state[1],
                type: state[2],
                engine: state[3],
                extras: state[4],
                year: state[6],
                vin: this.web3.toUtf8(state[5]),
                lastUpdate: state[7],
            };
        })
    },
    getVehiculeHistory: async function (address, component) {
        if (!this.web3) {
            return;
        }
        await this.contracts.Vehicule.at(address).then(vehicule => {
            vehicule.OnActionEvent({}, { fromBlock: 0, toBlock: 'latest' }).get((error, result) => {
                let list = {};
                result.forEach(row => {
                    var data;
                    if (row.args._data) {
                        data = JSON.parse(row.args._data);
                    }
                    var date = new Date(row.args._timestamp.c[0] * 1000);
                    if (!list[date.getFullYear()]) {
                        list[date.getFullYear()] = {};
                    }
                    if (!list[date.getFullYear()][date.getMonth()]) {
                        list[date.getFullYear()][date.getMonth()] = [];
                    }
                    list[date.getFullYear()][date.getMonth()].push({
                        event: row.args._event.c[0],
                        rerefence: row.args._ref,
                        description: row.args._description,
                        data: data,
                        timestamp: date,
                        blockNumber: row.args._blockNumber.c[0]
                    });
                });
                console.log(list);
                component.setState({
                    history: list
                });
            });
        });
    }
}

export default ContractLibrary
