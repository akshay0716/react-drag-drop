import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Component/Dashboard';

const App = () => {
  return (
    <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path="/" component={ Dashboard } />
      </Switch>
    </Router>
  </Provider>
  )
}

export default App
