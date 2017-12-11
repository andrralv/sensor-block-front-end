import React, { Component } from 'react'
import ContractLibrary from '../utils/ContractLibrary'

export class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Create Vehicule"
        };
    }

    render() {
        return (
            <div className="App">
                <Navigation title={this.state.title} />
                <div className="margin-left">
                    <div className="wrapper-2">
                        <div className="container">
                            <div id="blue-form">
                                <div className="form-container">
                                    <span className="input-addon">$</span>
                                    <input className="input-field" required autoFocus type="number" min="0" step="0.1" data-number-to-fixed="2" />
                                    <label className="input-label">Amount</label>
                                    <div className="input-subline"></div>
                                </div>
                                <div className="form-container">
                                    <input className="input-field" required type="number" min="0" step="0.5" data-number-to-fixed="2" />
                                    <label className="input-label">Elapsed Time (Hours)</label>
                                    <div className="input-subline"></div>
                                </div>
                                <i className="material-icons w3-xxlarge next">arrow_forward</i>
                                <div className="form-container">
                                    <textarea className="input-field" cols="40" rows="5" />
                                    <label className="input-label">Comments</label>
                                    <div className="input-subline"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create  