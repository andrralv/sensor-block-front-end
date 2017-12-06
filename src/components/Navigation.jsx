import React, { Component } from 'react'

export class Navigation extends Component {

    render() {
        return ( 
        <div className="navigation">
            <h1>{this.props.title}</h1>
        </div>
        )
    }

}

module.exports = Navigation;