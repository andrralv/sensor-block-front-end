import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import History from './History'
import Transfer from './Transfer'
import ReleaseVehicule from './service_shop/ReleaseVehicule'
import ReceiveVehicule from './service_shop/ReceiveVehicule'
import Service from './service_shop/Service'
import Create from './Create'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/history" component={History}/>
      <Route path="/transfer" component={Transfer}/>
      <Route path="/receive" component={ReceiveVehicule}/>
      <Route path="/release" component={ReleaseVehicule}/>
      <Route path="/service" component={Service}/>
      <Route path="/create" component={Create}/>
    </Switch>
  </main>
)

export default Main