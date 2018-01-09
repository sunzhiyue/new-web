import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Alignmet';
import Blog from './routes/Blog';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/try" component={Blog} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
