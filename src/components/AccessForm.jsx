import React, { Component } from 'react';
import ContractLibrary from '../utils/ContractLibrary'
import '../css/access-form.css'
import '../css/App.css'

export class AccessForm extends Component {


    render() {
        return (
            <div className="container">
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">Login</h1>
                    <form>
                        <div className="input-container">
                            <input  id="l-un" required />
                            <label for="l-un">Username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input  id="l-p" required />
                            <label for="l-p">Password</label>
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

export default AccessForm