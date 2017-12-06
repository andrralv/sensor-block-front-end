import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import ContractLibrary from './utils/ContractLibrary'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/App.css'


class App extends Component {
 
  pStyle = {
    marginLeft: '25%'
  };

  constructor(props) {
    super(props);
    this.state = {
        getData: "Home"
    };
  }

  getData(val) {
    console.log(val);
    this.setState({
      title: val
    })
  }

  componentWillMount() {
    ContractLibrary.getInstance();
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App
