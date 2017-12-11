import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Loader from './components/Loader'
import ContractLibrary from './utils/ContractLibrary'
import AccessForm from './components/AccessForm'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/App.css'
import './css/loader.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actor: {},
      loggedIn: false
    };
  }

  pStyle = {
    marginLeft: '25%'
  };

  componentWillMount() {
    ContractLibrary.getActorData(this);
  }

  login = (password) => {
    ContractLibrary.login(password, this);
  }

  render() {
    return (
      <div>
        {!this.state.actor.name ?
          (<Loader />) : (
            (
              this.state.loggedIn ?
                (<div>
                  <Sidebar actor={this.state.actor} />
                  <Main />
                </div>)
                : (<AccessForm login={this.login} />)
            )
          )
        }
      </div>
    );
  }
}

export default App
