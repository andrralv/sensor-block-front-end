import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'
import '../css/history.css'

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
            bn : ContractLibrary.getBlockNumber(),
            status : ContractLibrary.getVehiculeStatus("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7"),
            history: ContractLibrary.getVehiculeHistory("0x3e4161669Dd2abF0bA33bA63978C44f21ed61Ed7")
        });
    }

    render() {
        return (
            <div className="App">
                <div className="margin-left">
                    <div className="wrapper-2">
                        <h1>History</h1>
                        <h2>{this.state.status.brand}</h2>
                    </div>
                    <div className="item">
                        <div id="timeline">
                            <div>
                                {
                                    this.state.history.forEach(row => (
                                        <section className="year">
                                            <h3>row.timeline.getFullYear()</h3>
                                            <section>
                                                <ul>
                                                    <li>row.description</li>
                                                </ul>
                                            </section>
                                        </section>
                                    ))
                                }
                                <section className="year">
                                    <h3>2007</h3>
                                    <section>
                                        <ul>
                                            <li>Satoshi Nakamoto began working on the Bitcoin concept.</li>
                                        </ul>
                                    </section>
                                </section>
                                <section className="year">
                                    <h3>2008</h3>
                                    <section>
                                        <h4>August</h4>
                                        <ul>
                                            <li>Neal Kin, Vladimir Oksman, and Charles Bry file an application for an encryption patent application.</li>
                                            <li>Bitcoin.org was registered at <a href="https://anonymousspeech.com/">anonymousspeech.com</a>.</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <h4>October</h4>
                                        <ul>
                                            <li>Nakamoto describes the Bitcoin currency and solves the problem of double spending.</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <h4>November</h4>
                                        <ul>
                                            <li>The Bitcoin project is registered on <a href="https://sourceforge.net/">SourceForge.net</a>.</li>
                                        </ul>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default History