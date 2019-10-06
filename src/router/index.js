import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Test from '../modules/test/index';

class RouterIndex extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact render={() => (
          <Redirect to='/test' />
        )} />
        <Route path='/test' component={Test} />
      </Switch>
    );
  }
}

export default RouterIndex;
