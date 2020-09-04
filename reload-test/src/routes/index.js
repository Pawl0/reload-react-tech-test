import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { urls } from './urls';

const Routes = () => {

  return (
    <Router>
      <Switch>
        {urls.map((item, index) => (
          <Route
            exact
            key={index}
            path={item.url}
            component={item.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
