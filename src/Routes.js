import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

class Routes extends React.Component {
  render() {
    return ( 
      <Switch>
        <Route exact path='/' component = { Home } />
        <Route exact path='/about' component = { About } />
      </Switch>
    );
  };
};

export default Routes;