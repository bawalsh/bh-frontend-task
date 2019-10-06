import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Beers from 'containers/Beers/Beers'
import Beer from 'containers/Beer/Beer'

const App: React.FC = () => (
  <Switch>
    <Route path={'/:id'} component={Beer} />
    <Route exact path={'/'} component={Beers} />
  </Switch>
)

export default App
