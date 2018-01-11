import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Alignmet';
import Blog from './routes/Blog';
import Users from './routes/Users';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/try" component={Blog} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
