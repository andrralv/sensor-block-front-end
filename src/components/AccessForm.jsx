import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'
import '../css/access-form.css'
import '../css/App.css'

export class AccessForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            unlocked: false
        };
    }

    componentWillMount() {
        ContractLibrary.getAccounts(this);
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.unlocked !== nextState.unlocked) {
            this.props.login(nextState.unlocked);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        ContractLibrary.login(form.get("username"), form.get("password"), form.get("account"), this);
    };

    render() {
        const options = this.state.accounts.map((account, index) => {
            return <option key={index} value={account} label={account}>{account}</option>;
        });
        return (
            <div className="access-container">
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <input id="l-un" name="username" required />
                            <label htmlFor="l-un">Username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="password" id="l-p" name="password" required />
                            <label htmlFor="l-p">Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <label className="select-label" htmlFor="l-a">Account</label>
                            <select name="account" id="l-a">
                                {options}
                            </select>
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

export default AccessForm