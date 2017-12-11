import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'
import '../css/access-form.css'
import '../css/App.css'

export class AccessForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: null
        };
    }

    passwordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    login = () => {
        return function (e) {
            e.preventDefault();
            this.props.login(this.state.password);
        }.bind(this);
    };

    render() {
        return (
            <div className="container">
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">Login</h1>
                    <form>
                        <div className="input-container">
                            <input id="l-un" required />
                            <label htmlFor="l-un">Username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="password" id="l-p" required onChange={e => this.passwordChange(e)} />
                            <label htmlFor="l-p">Password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button onClick={this.login()}><span>Go</span></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AccessForm