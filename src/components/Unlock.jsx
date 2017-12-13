import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'
import '../css/access-form.css'
import '../css/App.css'

export class Unlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unlocked : false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        ContractLibrary.unlock(form.get("password"), this);
    };

    componentWillUpdate(nextProps, nextState){
        console.log(nextState);
        this.props.unlocked();
    }

    render() {
        return (
            <div className="access-container">
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">Confirm With Password</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <input type="password" id="l-p" name="password" required />
                            <label htmlFor="l-p">Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button><span>Go</span></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Unlock