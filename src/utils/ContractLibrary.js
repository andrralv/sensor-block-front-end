import TruffleContract from 'truffle-contract'
import getWeb3 from '../utils/getWeb3'
import VehiculeABI from '../../build/contracts/Vehicule'
import DatabaseABI from '../../build/contracts/VehiculeDatabase'
import ActorABI from '../../build/contracts/Actor'
import ActorRegistryABI from '../../build/contracts/ActorRegistry'
import FactoryABI from '../../build/contracts/VehiculeFactory'

const ContractLibrary = {
    web3: null,
    contracts: [],
    address: null,
    actor: {},
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
        this.contracts.Actor = TruffleContract(ActorABI);
        this.contracts.ActorRegistry = TruffleContract(ActorRegistryABI);
        this.contracts.Database = TruffleContract(DatabaseABI);
        this.contracts.Factory = TruffleContract(FactoryABI);

        this.contracts.Vehicule.setProvider(this.web3.currentProvider);
        this.contracts.Actor.setProvider(this.web3.currentProvider);
        this.contracts.ActorRegistry.setProvider(this.web3.currentProvider);
        this.contracts.Database.setProvider(this.web3.currentProvider);
        this.contracts.Factory.setProvider(this.web3.currentProvider);
    },
    getBlockNumber: async function () {
        if (!this.web3) {
            await this.getInstance();
        }
        return this.web3.eth.blockNumber;
    },
    getVehiculeStatus: async function (address, component) {
        if (!this.web3) {
            await this.getInstance();
        }
        await this.contracts.Vehicule.at(address).then(vehicule => {
            return vehicule.getState();
        }).then(state => {
            let statusList = {
                brand: state[0],
                model: state[1],
                type: state[2],
                engine: state[3].replace("{", "").replace("}", ""),
                extras: state[4].replace("{", "[").replace("}", "]").replace("true", "available"),
                year: state[6].c[0],
                vin: this.web3.toUtf8(state[5]),
                lastUpdate: state[7],
            };
            component.setState({
                status: statusList,
                loading: false
            })
        })
    },
    getVehiculeHistory: async function (address, component) {
        if (!this.web3) {
            await this.getInstance();
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
                component.setState({
                    history: list
                });
            });
        });
    },
    getActorData: async function (component) {
        if (!this.web3) {
            await this.getInstance();
        }
        if (!this.actor.address) {
            await this.getCurrentActor();
        }
        if (this.actor.name) {
            component.setState({
                actor: this.actor
            });
            return;
        }

        let actor = this.contracts.Actor.at(this.actor.address);
        this.actor.name = await actor.name();
        this.actor.database = await actor.database();
        this.actor.owner = await actor.owner();
        let atype = await actor.actorType();
        this.actor.type = atype.toNumber();
        this.actor.typeName = ((atype) => {
            switch (atype) {
                case 0: return "Manufacturer";
                case 1: return "Dealer";
                case 2: return "Service Shop";
                case 3: return "Owner";
                default: return "";
            }
        })(this.actor.type);
        component.setState({
            actor: this.actor
        });
    },
    getCurrentActor: async function () {
        if (this.actor.address) {
            return;
        }
        if (!this.web3) {
            await this.getInstance();
        }
        let registry = await this.contracts.ActorRegistry.deployed();
        this.actor.address = await registry.getActorAddress("0x9840d046A6D23727baa66882e63C77e51544f233");
    },
    getSensorData: async function (address, component) {
        if (!this.web3) {
            await this.getInstance();
        }
        await this.contracts.Vehicule.at(address).then(vehicule => {
            return vehicule.getState();
        }).then(state => {
            this.contracts.Vehicule.at(address).then(vehicule => {
                vehicule.OnActionEvent({ _event: 5 }, { fromBlock: 0, toBlock: 'latest' }).get((error, result) => {
                    console.log(result);
                    let list = {};
                    const row = result[result.length-1]
                    // result.forEach(row => {
                        var data;
                        if (row.args._data) {
                            data = JSON.parse(row.args._data);
                        }
                        list = data;
                    //});
                    component.setState({
                        sensors: list,
                        loading: false
                    })
                });
            });
        }).catch(error => {console.log(error)});
    },
    getVehicules: async function (component) {
        if (!this.web3) {
            await this.getInstance();
        }
        await this.contracts.Database.at(this.actor.database).then(database => {
            database.OnAddVehiculeEvent({}, { fromBlock: 0, toBlock: 'latest' }).get((error, result) => {
                let list = [];
                result.forEach(row => {
                    list.push({
                        vin: this.web3.toUtf8(row.args._vin),
                        address: row.args._vehiculeRef
                    });
                });
                component.setState({
                    vehicules: list,
                    loading: false
                });
            });
        })
    },
    getLatestMaintenance: async function (address, component) {
        if (!this.web3) {
            await this.getInstance();
        }
        let vehicule = await this.contracts.Vehicule.at(address);
        let state = await vehicule.getState();
        vehicule.OnActionEvent({ _event: 4 }, { fromBlock: state[7].toNumber(), toBlock: 'latest' }).get((error, result) => {
            let data = {};
            result.forEach(row => {
                var date = new Date(row.args._timestamp.c[0] * 1000);
                data = {
                    event: row.args._event.c[0],
                    rerefence: row.args._ref,
                    description: row.args._description,
                    timestamp: date,
                    blockNumber: row.args._blockNumber.c[0]
                };
            });
            component.setState({
                history: data,
                loading: false
            })
        });
    },
    applyService: async function (address, comments, component) {
        if (!this.web3) {
            await this.getInstance();
        }
        let sensor = {
            mileage: Math.floor((Math.random() * 10000) + 1),
            fuelTank: Math.floor((Math.random() * 100) + 1),
            oilMeter: Math.floor((Math.random() * 100) + 1)
        };
        let vehicule = await this.contracts.Vehicule.at(address);
        let result = await vehicule.addAction(4, "0x45e40c1EE3E4F7eB23e3E18b3774684B68C40A5b",
            comments, JSON.stringify(sensor), { from: this.web3.eth.accounts[0] });
        console.log(result);
        component.setState({
            currentVehicule: null,
            comments: null
        });
    },
    unlock: async function (password, component) {
        let result = await this.web3.personal.unlockAccount("0x9840d046A6D23727baa66882e63C77e51544f233", password, this.web3.fromDecimal(900));
        console.log("unlokc,", result);
        component.setState({
            unlocked: result
        });
    },
    createVehicule: async function (vehicule) {
        const engine = {
            type : vehicule.etype,
            cc : vehicule.ecc
        }
        const extras = {
            ac : (vehicule.ac === "on") ? true : false,
            bt : (vehicule.bt === "on") ? true : false
        }
        let factory = await this.contracts.Factory.deployed();
        let result = factory.createVehicule(vehicule.brand, vehicule.model, vehicule.type
            , JSON.stringify(engine), JSON.stringify(extras),
            this.web3.fromUtf8(vehicule.vin), vehicule.year,
            { from: "0x9840d046A6D23727baa66882e63C77e51544f233" });
        console.log(result);
    }
}

export default ContractLibrary