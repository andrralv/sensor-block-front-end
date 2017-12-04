import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import History from './History'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/history" component={History}/>
    </Switch>
  </main>
)

export default Main