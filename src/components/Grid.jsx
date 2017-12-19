import React, { Component } from 'react'
import Car from './Car'
import SensorTableCom from './SensorTableCom'
import SensorTableCrash from './SensorTableCrash'
import ContractLibrary from '../utils/ContractLibrary'
import Loader from './Loader'
import Status from './Status'
import Actor from './Actor'

export class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicules: [],
            status: null,
            actor: null,
            sensors: null,
            loading: false,
            title: "Home"
        };
    }

    componentWillMount() {
        ContractLibrary.getVehicules(this);
    }

    handleVehiculeChange = (e) => {
        this.setState({
            loading: true
        });
        if (e.target.value !== "0") {
            ContractLibrary.getVehiculeStatus(e.target.value, this);
            ContractLibrary.getActorData(this);
            ContractLibrary.getSensorData(e.target.value, this);
        }
    }

    render() {
        const vehicules = this.state.vehicules.map((vehicule, index) => {
            return <option key={index} value={vehicule.address} label={vehicule.vin}>{vehicule.vin}</option>;
        });

        return (
            <div>
                <select id="vehicules" onChange={this.handleVehiculeChange} disabled={!this.state.vehicules.length > 0}>
                    <option value="0">Choose a Vehicle</option>
                    {vehicules}
                </select>
                {this.state.loading ? (<Loader />)
                    : (
                        (!this.state.sensors ?
                            (<h4>No information to show</h4>)
                            : (
                                <div className="grid-wrapper">
                                    <div className="grid-box a">
                                        {(this.state.sensors.co2exhaust) && <Car sensors={this.state.sensors} />}
                                    </div>
                                    <div className="grid-box b">
                                        <SensorTableCom sensors={this.state.sensors} />
                                    </div>
                                    <div className="grid-box c">
                                        <Status status={this.state.status} />
                                    </div>
                                    <div className="grid-box d">
                                        <Actor actor={this.state.actor} />
                                    </div>
                                    <div className="grid-box e">
                                        <SensorTableCrash sensors={this.state.sensors} />
                                    </div>
                                </div>
                            )
                        )

                    )
                }
            </div>
        )
    }

}
export default Grid;
