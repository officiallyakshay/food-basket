import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MapPage from './MapPage';
import NeedHelp from './NeedHelp';
import Restaurant from './Restaurant';
import GetFood from './GetFood';


class Routes extends React.Component {
  render() {
    return ( 
      <Switch>
        <Route exact path='/' component = { Home } />
        <Route exact path='/about' component = { About } />
        <Route exact path='/restaurant' component = { Restaurant } />
        <Route exact path='/map' component = { MapPage } />
        <Route exact path='/nh' component = { NeedHelp } />
        <Route exact path='/getfood' component = {GetFood}/>
      </Switch>
    );
  };
};

export default Routes;