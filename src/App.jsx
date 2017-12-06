import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Loader from './components/Loader'
import ContractLibrary from './utils/ContractLibrary'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/App.css'
import './css/loader.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actor: {}
    };
  }

  pStyle = {
    marginLeft: '25%'
  };

  componentWillMount() {
    ContractLibrary.getActorData(this);
  }

  render() {
    return (
      <div>
        {!this.state.actor.name ?
          (<Loader />) : (
            <div>
              <Sidebar actor={this.state.actor} />
              <Main />
            </div>
          )
        }
      </div>
    );
  }
}

export default App
