import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Beers from 'containers/Beers/Beers'
import Beer from 'containers/Beer/Beer'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path={'/:id'} component={Beer} />
      <Route exact path={'/'} component={Beers} />
    </Switch>
  </Router>
)

export default App
