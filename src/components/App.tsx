import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Beers from 'components/Beers/Beers'
import Beer from 'components/Beer/Beer'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path={'/:id'} component={Beer} />
      <Route exact path={'/'} component={Beers} />
    </Switch>
  </Router>
)

export default App
