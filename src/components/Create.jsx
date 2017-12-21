import React, { Component } from 'react'
import ContractLibrary from '../utils/ContractLibrary'
import Navigation from './Navigation'
import Unlock from './Unlock';

export class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Create Vehicule",
            vehicule: {},
            unlock: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const vehicule = {};
        for (let name of form.keys()) {
            vehicule[name] = form.get(name);
        }
        this.setState({
            vehicule: vehicule,
            unlock: true
        });
    }

    unlocked = () => {
        console.log(this.state.vehicule);
        ContractLibrary.createVehicule(this.state.vehicule, this);
    }

    render() {
        const { unlock } = this.state;
        return (
            <div className="App">
                <Navigation title={this.state.title} />
                <div className="margin-left">
                    <div className="wrapper-2">
                        <div className="container">
                            {unlock ? (<Unlock unlocked={this.unlocked} />)
                                : (<form onSubmit={this.handleSubmit}>
                                    <div id="blue-form">
                                        <div className="form-container">
                                            <input className="input-field" name="brand" required autoFocus />
                                            <label className="input-label">Brand</label>
                                            <div className="input-subline"></div>
                                        </div>
                                        <div className="form-container">
                                            <input className="input-field" name="model" required />
                                            <label className="input-label">Model</label>
                                            <div className="input-subline"></div>
                                        </div>
                                        <div className="form-container">
                                            <input className="input-field" name="vin" required />
                                            <label className="input-label">VIN</label>
                                            <div className="input-subline"></div>
                                        </div>
                                        <div className="form-container">
                                            <input className="input-field" name="year" required type="number" min="2018" step="1" data-number-to-fixed="2" />
                                            <label className="input-label">Year</label>
                                            <div className="input-subline"></div>
                                        </div>
                                        <div className="form-container">
                                            <table>
                                                <tbody>
                                                    <tr><td>Additional Information</td></tr>
                                                    <tr>
                                                        <td><label htmlFor="vtype">Type</label></td>
                                                        <td>
                                                            <select id="vtype" name="type" >
                                                                <option value="Sedan">Sedan</option>
                                                                <option value="Hatchback">Hatchback</option>
                                                                <option value="4x2">4x2</option>
                                                                <option value="4x4">4x4</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label htmlFor="ecc">Engine Power</label></td>
                                                        <td>
                                                            <select id="ecc" name="ecc" >
                                                                <option value="1400">1400 CC</option>
                                                                <option value="1600">1600 CC</option>
                                                                <option value="1800">1800 CC</option>
                                                                <option value="2000">2000 CC</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label htmlFor="etype">Engine Type</label></td>
                                                        <td>
                                                            <select id="etype" name="etype" >
                                                                <option value="Gas">Gas</option>
                                                                <option value="Diesel">Diesel</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                    <tr><td>Extras</td></tr>
                                                    <tr>
                                                        <td><label htmlFor="ac">A/C</label></td>
                                                        <td><input id="ac" name="ac" type="checkbox" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Bluetooth</label></td>
                                                        <td><input id="bt" name="bt" type="checkbox" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button className="form-submit"><i className="material-icons w3-xxlarge next" >arrow_forward</i></button>
                                            <div className="input-subline"></div>
                                        </div>
                                    </div>
                                </form>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create  