import React, { Component } from 'react';
import { Map,GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import NeedHelp from '../src/NeedHelp';
import MapPage from '../src/MapPage';
const mapStyles = {
  width: '50%',
  height: '50%'
};

export class App extends Component {
 
  render() {
    
    return (
     
  
      <div className="App">
        <h1>Provider - Home Page</h1>
        <h5>Get added to the map</h5>
        <NeedHelp />
      
      </div>
     
        
     
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA9QVRCFi7gUdzwot0oueSSy90hybtqNpM'
})(App);