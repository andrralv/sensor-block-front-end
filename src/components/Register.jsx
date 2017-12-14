import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'
import '../css/access-form.css'
import '../css/App.css'

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: []
        };
    }

    componentWillMount() {
        ContractLibrary.getAccounts(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        ContractLibrary.register(form.get("name"),form.get("type"),form.get("account"), this);
    };

    render() {
        const options = this.state.accounts.map((account, index) => {
            return <option key={index} value={account} label={account}>{account}</option>;
        });
        return (
            <div className="access-container active">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card alt">
                    <div className="toggle"></div>
                    <h1 className="title">Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-container">
                            <input id="r-n" name="name" required />
                            <label htmlFor="r-n">Name</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="password" id="r-p" name="password" required />
                            <label htmlFor="r-p">Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <select name="account" id="r-a">
                                {options}
                            </select>
                            <label className="select-label" htmlFor="r-a">Account</label>
                        </div>
                        <div className="input-container">
                            <select name="type" id="r-t">
                                <option value="0">Manufacturer</option>
                                <option value="1">Dealer</option>
                                <option value="2">ServiceShop</option>
                                <option value="3">Owner</option>
                            </select>
                            <label className="select-label" htmlFor="r-t">Type</label>
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

export default Register