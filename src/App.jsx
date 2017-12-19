import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Loader from './components/Loader'
import ContractLibrary from './utils/ContractLibrary'
import AccessForm from './components/AccessForm'
import { Register } from './components/Register';

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
      loggedIn: false,
      loading: false,
      registered : false
    };
  }

  pStyle = {
    marginLeft: '25%'
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState.loggedIn) {
      if(nextState.loading){
        ContractLibrary.getActorData(this);
      }
    }
  }

  login = (result) => {
    this.setState({
      loggedIn: result,
      loading: true
    });
  }

  registered = (result) => {
    this.setState({
      registered : result
    });
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn ?
          (<AccessForm login={this.login} />)
          : (
            this.state.loading ?
              (<Loader />)
              : (
                this.registered ?
                  (<Register callback={this.registered} />)
                  : (
                    <div>
                      <Sidebar actor={this.state.actor} />
                      <Main />
                    </div>
                  )
              )
          )
        }
      </div>
    );
  }
}

export default App
