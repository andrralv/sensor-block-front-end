import React, { Component } from 'react'

export class Navigation extends Component {
    constructor(props) {
        super(props);
        title: props.title;
    }

    render() {
        return ( 
        <div className="navigation">
            <h1>{this.props.title}</h1>
        </div>
        )
    }

}

module.exports = Navigation;