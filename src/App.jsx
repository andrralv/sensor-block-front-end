import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  }

  pStyle = {
    marginLeft: '25%'
  };

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
