import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import App from './App';
import Quote from './Quote';
import Error from './Error';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
