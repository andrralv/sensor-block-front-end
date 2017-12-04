import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import ContractLibrary from './utils/ContractLibrary'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
 
  pStyle = {
    marginLeft: '25%'
  };

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
